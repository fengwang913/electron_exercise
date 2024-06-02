import { Button } from "antd";
// const fs = require("fs");
// import * as fs from "fs";
const PuppeteerHTMLPDF = require("puppeteer-html-pdf");
const hbs = require("handlebars");
const pdf = require("pdf-parse-fork");


// import React from "react";
export default function Community() {

    const demo = async () =>{
        console.log('===============')

        const htmlPDF :any= new PuppeteerHTMLPDF();

        let fs = require('fs');
        let dataBuffer = fs.readFileSync("/Users/wangfeng/Desktop/软件测试慕课.pdf","utf8");
        
        // console.log('=========dataBuffer======',dataBuffer)
        // const pdfData = {
        //     invoiceItems: [
        //       { item: "Website Design", amount: 5000 },
        //       { item: "Hosting (3 months)", amount: 2000 },
        //       { item: "Domain (1 year)", amount: 1000 },
        //     ],
        //     invoiceData: {
        //       invoice_id: 123,
        //       transaction_id: 1234567,
        //       payment_method: "Paypal",
        //       creation_date: "04-05-1993",
        //       total_amount: 8000,
        //     },
        //     baseUrl: "https://ultimateakash.com",
        //   };
        // let __dirname = "/Users/wangfeng/Desktop"
        // const html = await htmlPDF.readFile(__dirname + "/软件测试慕课.html", "utf8");
        // const template = hbs.compile(html);
        // const content = template(pdfData);
        pdf(dataBuffer).then(function (data) {
            // number of pages
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
            // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata);
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            // PDF text
            console.log(data.text);
        });
        // console.log('===============',html)

        console.log('===============')
    }

    return <div>
        <Button type="primary" 
        onClick={() => {
            demo();
                         }}
        > 
            导入pdf
        </Button>
    </div>;
}