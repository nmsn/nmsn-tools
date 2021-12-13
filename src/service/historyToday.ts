import { Provide } from '@midwayjs/decorator'
import { HistoryTodayItem } from '~/typings/data'
import axios from 'axios'

interface ResHistoryToday {
  year: string
  list: HistoryTodayItem[]
  time: number
}
@Provide('ApiHistoryTodayService')
export class ApiHistoryTodayService {
  async index(): Promise<ResHistoryToday> {
    const {
      data: { data, msg },
    } = await axios.get('https://api.qzone.work/api/today.history?num=100')

    if (data) {
      const { list, year } = data
      return {
        year,
        list: list?.sort((cur, pre) => Number(pre.year) - Number(cur.year)),
        time: Date.now(),
      }
    }
    return msg
  }
}
