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
    Promise.all([
      this.heroku.get<Heroku.App>(`/apps/${flags.app}/`),
      this.heroku.get<Heroku.App>(`/apps/${flags.app}/releases/`)
    ]).then(([checkApp, queryRelease]) => {
      let existance = checkApp
      let {body}:any = queryRelease
      logInfo(checkApp, queryRelease, this)
    }).catch(error => { this.log(error.body)})
  }
}

function logInfo(appName:any,{body}:any, herokuObject:any){
const name = appName.body.name
herokuObject.log(
`🤓  Application Name: ${name}
${body.length} most recent releases shown:
${gatherReleaseInfo(body).toString()}`
)}

function gatherReleaseInfo(body:any[]){
  return body.slice(body.length-20, body.length).reverse()
  .map((bodyElement:object, index:number) => {
    const currentVersion = ((body.length) - index)
    return `${releaseInfo(currentVersion, bodyElement)}`
  })
}

function releaseInfo(currentVersion:any, {created_at, user, id}:any) {
return `
Release v:${currentVersion}
  Start Date: ${created_at}
  Author: ${user.email}
  Id: ${id}`
}