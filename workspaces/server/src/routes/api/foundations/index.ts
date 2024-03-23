import { OpenAPIHono } from '@hono/zod-openapi';

import { getCompanyApp } from './getCompany';
import { getContactApp } from './getContact';
import { getOverviewApp } from './getOverview';
import { getQuestionApp } from './getQuestion';
import { getTermApp } from './getTerm';

const app = new OpenAPIHono();

app.route('/', getCompanyApp);
app.route('/', getContactApp);
app.route('/', getOverviewApp);
app.route('/', getQuestionApp);
app.route('/', getTermApp);

export { app as foundationApp };
