import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import { CONTACT } from '../../../constants/Contact';

const app = new OpenAPIHono();

const route = createRoute({
  method: 'get',
  path: '/api/v1/foundations/contact',
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
      description: 'Get Contact.',
    },
  },
  tags: ['[App] foundations API'],
});

app.openapi(route, async (c) => {
  return c.json(CONTACT);
});

export { app as getContactApp };
