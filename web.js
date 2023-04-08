import puppeteer from 'puppeteer'

const url = 'https://pahe.li/'

export const webScrap = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const allPage = await page.evaluate(() => {
    // select parent
    const article = document.querySelectorAll('.cat-box-content article')

    // mapping all inside parent
    return Array.from(article).slice(0,1).map(() => {
      const title = document.querySelector('h2').innerText
      const date = document.querySelector('.tie-date').innerText
      const cate = document.querySelector('p .post-cats').innerText
      const link = document.querySelector('h2 a').href
      const img = document.querySelector('.post-thumbnail img').src
      const desc = document.querySelector('.entry p').innerText
      return { title,link,date,cate,img,desc }
    })
  })

  const allHeader = await page.evaluate(() => {
    const header = document.querySelectorAll('li')
    return Array.from(header).map(() => {
      const img = document.querySelector('.ttip img').src
      return {img}
    })
  })
  console.log(allHeader)
  await browser.close()
}
