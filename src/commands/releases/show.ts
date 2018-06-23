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
    let {body} = await this.heroku.get<Heroku.App>(`/apps/${flags.app}/releases/`)
    
    this.log(`${body.length} most recent releases shown:`)
    for(let counter0 = 20; counter0 >= 0; counter0--) {
      if (body.length > counter0) {
        let {created_at, user, id} = body[counter0]
        this.log(`Release v${counter0 + 1}:`) 
        this.log(`  Start Date: ${created_at}`) 
        this.log(`  Author: ${user.email}`) 
        this.log(`  Id: ${id}`)   
      }
    }
  }
}
