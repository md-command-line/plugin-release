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
    const reversed = body.slice(body.length-20, body.length).reverse()
    for(let counter0 = 0; counter0 < 20; counter0++) {
      if (counter0 < reversed.length) {
        const {created_at, user, id} = reversed[counter0]
        // implement with most recent first.
        this.log(`Release v${body.length - counter0}:`)
        this.log(`  Start Date: ${created_at}`)
        this.log(`  Author: ${user.email}`)
        this.log(`  Id: ${id}`)
      }
    }
  }
}
