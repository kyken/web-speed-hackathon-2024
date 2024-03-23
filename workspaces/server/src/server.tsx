import { serve } from '@hono/node-server';

import { seeding } from './database/seed';
import { app } from './routes';

async function main() {
  await seeding();

  serve({ fetch: app.fetch, port: Number(process.env['PORT']) || 8000 }, (info) => {
    // eslint-disable-next-line no-constant-condition
    const address = (info.address = '0.0.0.0' ? 'http://localhost' : info.address);
    console.log(`listening on ${address}:${info.port}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
