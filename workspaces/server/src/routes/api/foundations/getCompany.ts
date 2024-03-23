import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import { COMPANY } from '../../../constants/Company';

const app = new OpenAPIHono();

const route = createRoute({
  method: 'get',
  path: '/api/v1/foundations/company',
  request: {
    params: undefined,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.string(),
        },
      },
      description: 'Get Company.',
    },
  },
  tags: ['[App] foundations API'],
});

app.openapi(route, async (c) => {
  return c.json(COMPANY);
});

export { app as getCompanyApp };
