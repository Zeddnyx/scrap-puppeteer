import { webScrapper } from './scrapper.js'

const url = 'https://pahe.li/'
const paheScrapper = async () => {
  webScrapper(url, 'article', 'h2')
}
export { paheScrapper }
