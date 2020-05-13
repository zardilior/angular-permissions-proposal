const {Annotation, InetAddress} = require('zipkin');

function zipkinClient(tracer, Mysql, config, serviceName = tracer.localEndpoint.serviceName, remoteServiceName = 'mysql') {
  const actualFn = Mysql.query;
  Mysql.query = async function(sql, values) {
    const id = tracer.createChildId();
    tracer.letId(id, () => {
      tracer.recordAnnotation(new Annotation.ClientSend());
      tracer.recordServiceName(remoteServiceName);
      tracer.recordBinary('Query',`${sql}`);
      tracer.recordBinary('Values',`${JSON.stringify(values)}`);
      tracer.recordRpc(`query ${this.pool.config.connectionConfig.database}`);
    });

    const result = await actualFn.call(Mysql, sql, values);

    tracer.letId(id, () => {
      tracer.recordAnnotation(new Annotation.ClientRecv());
    });

    return result;
  }
  return Mysql;
};

module.exports = zipkinClient
