const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://coino.com/en/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});
  setTimeout(async () => {
    const pageClicked = await page.evaluate(() => {
      let test = document.querySelector('#root > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > p')
      console.log(test.innerHTML);
      
      return test.innerHTML
    })
    console.log(pageClicked, "burada");
  }, 3000);
// const buttonClick = await page.$(".P2_P2__eT9Ra", (el) => console.log(el, "test"));

})();