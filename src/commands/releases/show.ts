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
    const result = body.slice(body.length-20, body.length).reverse()
    .map((bodyElement:any, index:any) => {
      const currentVersion = ((body.length) - index)
      return `${releaseInfo(currentVersion, bodyElement)}`
    })
    console.log(result.toString())
  }
}

function releaseInfo(currentVersion:any, {created_at, user, id}:any) {
return `
Release v:${currentVersion}
  Start Date: ${created_at}
  Author: ${user.email}
  Id: ${id}`
}