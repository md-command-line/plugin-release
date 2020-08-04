import * as Heroku from '@heroku-cli/schema'
export const handleAppError = async (
  error: {
    oclif: { exit: number };
    body: any; toString: () => string;
  },
  heroku: { get: (arg0: string) => Heroku.App },
  log: { (message?: string | undefined, ...args: any[]): void; (message?: string | undefined, ...args: any[]): void; (arg0: string, arg1: any): void }
) => {
  if (error.oclif.exit === 2) {
    // console.log(Object.keys(e))
    const actualError = error.toString()
    log(actualError)
    if (actualError.includes('--app')) {
      const res = (
        (await heroku.get('/apps')).body as any[]
      ).map(x => x.name)
      .join('\n')
      log('\nYou are currently logged in, here are your apps:\n' + res)
    } else {
      log('error', error.body)
    }
  }
}
export const checkHerokuApi = async (
  heroku: { get: (arg0: string) => Heroku.App },
  log: { (message?: string | undefined, ...args: any[]): void; (message?: string | undefined, ...args: any[]): void; (arg0: string, arg1: any): void }
) => {
  try {
    (await heroku.get('/apps'))
  } catch (error) {
    log('error reaching heroku api. possibly, no internet found.', {error})
  }
}
