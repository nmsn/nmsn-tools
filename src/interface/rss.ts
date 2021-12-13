import { RSSData } from '~/typings/data'

export interface IApiRSSService {
  index: () => Promise<RSSData>
}
