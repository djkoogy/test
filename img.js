const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function run() {
    // const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    
    
    const browser = await puppeteer.launch({headless: 'shell',
                                           args: ['--no-sandbox', '--disable-setuid-sandbox']});
    
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36');
    await page.setViewport({ width: 1280, height: 10000, deviceScaleFactor: 1,});
    
        
    // await page.goto('https://www.naver.com/',{waitUntil: 'networkidle0',});
    await page.goto('https://smartstore.naver.com/2636/products/8433737518?NaPm=ct%3Dlu1g2ebk%7Cci%3D6e82c895c61effb0c0b98956cfaae0516107d760%7Ctr%3Dslsl%7Csn%3D7990625%7Chk%3D417dcbd755caf8747e65f2d44e4c9f763cc78bbc',{waitUntil: 'networkidle0',});
    
    // 페이지 소스 가져오기 
    
    const content = await page.content();
    const $ = cheerio.load(content);
    
    
    
    // await page.goto('https://smartstore.naver.com/2636/products/8433737518?NaPm=ct%3Dlu1g2ebk%7Cci%3D6e82c895c61effb0c0b98956cfaae0516107d760%7Ctr%3Dslsl%7Csn%3D7990625%7Chk%3D417dcbd755caf8747e65f2d44e4c9f763cc78bbc',
    //                {waitUntil:  ["load", "domcontentloaded"],});
    // await page.click( "<button class="_1gG8JHE9Zc N=a:itm.dmore _nlog_click _nlog_impression_element" type="button" aria-hidden="true" aria-current="false" data-shp-page-key="100329229" data-shp-sti="" data-shp-nsc="smartstore.end" data-shp-abt_exps="[]" data-shp-inventory="detailitm" data-shp-area="detailitm.more" data-shp-area-type="action" data-shp-area-id="more">상세정보 펼쳐보기</button>");
    
    // await page.evaluate(() => { document.querySelectorAll('._1gG8JHE9Zc N=a:itm.dmore _nlog_click _nlog_impression_element')[1].click(); });
    
    // await page.waitForNavigation( );
    
    console.log($);
        
        
        
    // await page.goto('https://www.coupang.com/',{waitUntil: 'networkidle0',});
    // await page.goto('https://www.coupang.com/vp/products/4755942?itemId=896566&vendorItemId=3000789515&sourceType=srp_product_ads&clickEventId=6db7d300-e78e-11ee-93ca-f05a7aff911d&korePlacement=15&koreSubPlacement=3&q=skatjd+rjsrkd&itemsCount=10&searchId=337369e7b3df4773a277723ba9228f40&rank=2&isAddedCart=');

    // await page.waitForSelector('::-p-xpath(//*[@id="productDetail"]/div[1])');
    
    
    await page.screenshot({path: "스샷0.png", fullpage: true });
    //const text = await page.evaluate(() => document.body.innerText);
    //console.log(text);
    
    
    await browser.close();
}

run();

