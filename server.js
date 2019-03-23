const request = require('request');
const cheerio = require('cheerio');


request('https://aaronsoftech.com/',(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const header = $('.header--topbar');
        const output = header.find('h1').text();
         //output = header.children('h1').text();
        console.log(output);
    }
})