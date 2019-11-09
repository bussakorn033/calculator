const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://29bfc3c55cc646b88d6239ebc0e96b79@sentry.io/1814038' });

Sentry.configureScope(function(scope) {
    scope.setTag("5735512033", "nan15594@gmail.com");
    scope.setUser({
      email: "nan15594@gmail.com",
      username: 'Bussakorn Saetiew’'
    });
   });
// const calculator = require('./calculator')
myUndefinedFunction();

