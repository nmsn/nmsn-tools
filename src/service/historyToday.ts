import { Provide } from '@midwayjs/decorator'
import { HistoryTodayItem } from '~/typings/data'
import axios from 'axios'

@Provide('ApiHistoryTodayService')
export class ApiHistoryTodayService {
  async index(): Promise<HistoryTodayItem[]> {
    const {
      data: { data, msg },
    } = await axios.get('https://api.qzone.work/api/today.history?num=10')

    if (data) {
      return data
    }
    return msg
  }
}
