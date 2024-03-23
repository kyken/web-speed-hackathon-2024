import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import { QUESTION } from '../../../constants/Question';

const app = new OpenAPIHono();

const route = createRoute({
  method: 'get',
  path: '/api/v1/foundations/question',
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
      description: 'Get Question.',
    },
  },
  tags: ['[App] foundations API'],
});

app.openapi(route, async (c) => {
  return c.json(QUESTION);
});

export { app as getQuestionApp };
