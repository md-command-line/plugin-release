import {Command, flags, APIClient} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'
export const handleAppError = async (
    e: { 
        oclif: { exit: number }, 
        body: any; toString: () => string 
    },
    heroku: { get: (arg0: string) => Heroku.App },
    log: { (message?: string | undefined, ...args: any[]): void; (message?: string | undefined, ...args: any[]): void; (arg0: string, arg1: any): void }
) => {
    if(e.oclif.exit === 2){
      // console.log(Object.keys(e))
      const actualError = e.toString()
      console.log(actualError)
      if(actualError.includes('--app')){
        const res = (
            <any[]> ( await heroku.get(`/apps`) ).body
          ).map(x => x.name)
          .join('\n')
        console.log('\nYou are currently logged in, here are your apps:\n'+res)
      }
      else {
        console.log({e})
        log('error', e.body)
      }
    }
}
export const checkHerokuApi = async (
    heroku: { get: (arg0: string) => Heroku.App }
) => {
    try {
        ( await heroku.get(`/apps`) )
    }
      catch(e){
        console.log('error reaching heroku api. possibly, no internet found.', {e})
    }
}    