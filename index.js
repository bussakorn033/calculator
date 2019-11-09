const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://29bfc3c55cc646b88d6239ebc0e96b79@sentry.io/1814038' });

const calculator = require('./calculator')
myUndefinedFunction();