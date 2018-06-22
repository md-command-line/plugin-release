import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'
// new releases

export default class Show extends Command {
  // static description = ''

  //   static examples = [
  //     `$ oclif-example hello
  // hello world from ./src/hello.ts!
  // `,
  //   ]

  static flags = {
    // help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'repo to print'}),
    // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
    remote: flags.remote(),
    app: flags.app({required: true})

  }

  static args = [{name: 'file'}]
  // this.heroku client handles authentication

  static description = 'Show specific repository'
  async run() {

    const {flags} = this.parse(Show)
   
    let {body} = await this.heroku.get<Heroku.App>(`/apps/${flags.app}`)
    console.log(body.name)    

    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
