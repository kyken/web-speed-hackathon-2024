import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import { OVERVIEW } from '../../../constants/Overview';

const app = new OpenAPIHono();

const route = createRoute({
  method: 'get',
  path: '/api/v1/foundations/overview',
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
      description: 'Get Overview.',
    },
  },
  tags: ['[App] foundations API'],
});

app.openapi(route, async (c) => {
  return c.json(OVERVIEW);
});

export { app as getOverviewApp };
