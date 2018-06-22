import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'

// for future use: /apps/{app_id_or_name}/releases/{release_id_or_version}   
export default class Show extends Command {
  
  static description = 'show latest releases for an app'

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  async run() {

    const {flags} = this.parse(Show)
  }
}
