export interface RSSItem {
  title: string
  link: string
  pubDate: string
  creator: string
  content: string
  contentSnippet: string
  categories: string
  isoDate: string
}

export interface RSSData {
  feedUrl?: string
  title: string
  description: string
  link: string
  items: RSSItem[]
}
