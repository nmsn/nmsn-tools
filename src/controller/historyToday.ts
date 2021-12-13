import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from 'egg'
import { IApiHistoryTodayService } from '../interface'

@Provide()
@Controller('/api/historyToday')
export class TodayHistory {
  @Inject()
  ctx: Context

  @Inject('ApiHistoryTodayService')
  service: IApiHistoryTodayService

  @Get('/')
  async getIndexData() {
    const data = await this.service.index()
    return data
  }
}
