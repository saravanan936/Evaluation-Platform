if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./src/mocks/browser');
    worker.start();
  }
  