import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import { TERM } from '../../../constants/Term';

const app = new OpenAPIHono();

const route = createRoute({
  method: 'get',
  path: '/api/v1/foundations/term',
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
      description: 'Get Term.',
    },
  },
  tags: ['[App] foundations API'],
});

app.openapi(route, async (c) => {
  return c.json(TERM);
});

export { app as getTermApp };
