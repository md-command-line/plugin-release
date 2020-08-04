import {Command, flags} from '@heroku-cli/command'
import * as Heroku from '@heroku-cli/schema'
import { handleAppError, checkHerokuApi } from '../helpers'

// for future use: /apps/{app_id_or_name}/releases/{release_id_or_version}
export default class Ask extends Command {
  static description = 'show application name if found'
  static exampleCommand = 'heroku ask -a intense-crag-70741'

  static flags = {
    remote: flags.remote(),
    app: flags.app({required: true})
  }

  async run() {
    checkHerokuApi(this.heroku)
    try{
      ( await this.heroku.get(`/apps`) )
      const {flags} = this.parse(Ask)
      let {body}: any = await this.heroku.get<Heroku.App>(`/apps/${flags.app}/`)//.catch(x => {this.log(x.body); throw "exit"})
      body ? this.log(body.name) : this.log('application name incorrect')
    }
    catch(e){
      handleAppError(e, this.heroku, this.log)
    }
    
  }
}
