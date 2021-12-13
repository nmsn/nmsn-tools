import { Provide } from '@midwayjs/decorator'
import { RSSData } from '~/typings/data'

import * as Parser from 'rss-parser'

const rssData = [
  {
    title: 'Taobao-FED-|-淘宝前端团队',
    rss: 'https://fed.taobao.org/atom.xml',
  },
  {
    title: '张鑫旭-鑫空间-鑫生活',
    rss: 'https://www.zhangxinxu.com/wordpress/feed/',
  },
  {
    title: '阮一峰的网络日志',
    rss: 'http://www.ruanyifeng.com/blog/atom.xml',
  },
]

@Provide('ApiRSSService')
export class ApiRSSService {
  async index(): Promise<RSSData> {
    const parser = new Parser({
      headers: {
        'User-Agent':
          'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      },
    })

    const result = await parser.parseURL(rssData[1].rss)

    return result as any
  }
}
