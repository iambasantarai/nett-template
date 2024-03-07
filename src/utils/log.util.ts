import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
    bindings: (bindings) => {
      return {
        pid: bindings.pid,
        // host: bindings.hostname,
        // node_version: process.version,
      };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});
