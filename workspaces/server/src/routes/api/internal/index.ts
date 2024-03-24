import { OpenAPIHono } from '@hono/zod-openapi';

import { initializeGetApp } from './initializeGet';
import { initializePostApp } from './initializePost';

const app = new OpenAPIHono();

app.route('/', initializeGetApp);
app.route('/', initializePostApp);

export { app as internalApp };
