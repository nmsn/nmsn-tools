import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from 'egg'
import { IApiRSSService } from '../interface'

@Provide()
@Controller('/api/rss')
export class RSS {
  @Inject()
  ctx: Context

  @Inject('ApiRSSService')
  service: IApiRSSService

  @Get('/')
  async getIndexData() {
    const data = await this.service.index()
    return data
  }
}
