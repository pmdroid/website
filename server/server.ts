import express from 'express';
import puppeteer from 'puppeteer';
// @ts-ignore
import { Nuxt, Builder } from 'nuxt';

import config from '../nuxt.config.js';

const app = express();

const start = async () => {
  const nuxt = new Nuxt(config);
  const browser = await puppeteer.launch();
  const { host, port } = nuxt.options.server;

  await nuxt.ready();

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.get('/pdf', async (_: express.Request, response: express.Response) => {
    const page = await browser.newPage();
    await page.goto(`http://${host}:${port}/resume`);
    const pdf = await page.pdf({
      scale: 0.8,
      printBackground: true,
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      }
    });

    response.setHeader('Content-Type', 'application/pdf');
    response.send(pdf);
  });

  app.use(nuxt.render);

  app.listen(port, host);
  console.log(`Server listening on http://${host}:${port}`);
};

start();
