import {
  Tracer,
  BatchRecorder,
  jsonEncoder,
  ConsoleRecorder,
} from 'zipkin';

import { CLSContext } from 'src/CLSContext';
import { HttpLogger } from 'zipkin-transport-http';

export const tracer = new Tracer({
  ctxImpl: new CLSContext(),
  /*
  recorder: new ConsoleRecorder(),
  */
  recorder: new BatchRecorder({
    logger: new HttpLogger({
      endpoint: `http://localhost:9411/api/v2/spans`,
      jsonEncoder: jsonEncoder.JSON_V2,
    }),
  }),
  localServiceName: "propuesta-permisos",
});
