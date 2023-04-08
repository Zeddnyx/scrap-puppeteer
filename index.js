import puppeteer from 'puppeteer'
import { paheScrapper } from './pahe.js'
import { webScrap } from './web.js'

const scrapWeb = async () => {
  paheScrapper()
}

// scrapWeb()
webScrap()
