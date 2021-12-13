import { HistoryTodayItem } from '~/typings/data'

export interface IApiHistoryTodayService {
  index: () => Promise<HistoryTodayItem>
}
