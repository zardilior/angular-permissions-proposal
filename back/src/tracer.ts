import {
  Tracer,
  BatchRecorder,
  jsonEncoder
} from 'zipkin';

const CLSContext = require('zipkin-context-cls');
const { HttpLogger } = require('zipkin-transport-http');
const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;

export const tracer = new Tracer({
  ctxImpl: new CLSContext(),
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: `http://localhost:9411/api/v2/spans`,
      jsonEncoder: jsonEncoder.JSON_V2,
    }),
  }),
  localServiceName: "propuesta-permisos",
});
