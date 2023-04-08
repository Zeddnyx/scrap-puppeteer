import puppeteer from 'puppeteer'

const webScrapper = async  (url, elements, titleElements) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const scrapAll = await page.evaluate((allELement, titleSelector) => {
    const scrap = document.querySelectorAll(allELement)

    return Array.from(scrap).slice(0,5).map(list => {
      const title = list.querySelector(titleSelector).innerText
      const url = list.querySelector('a').href
      return { title, url }
    })
  }, elements, titleElements)

    console.log(scrapAll)
}
export { webScrapper }

