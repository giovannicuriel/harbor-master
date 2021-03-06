'use strict';

const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('swarm - join', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/swarm/join')
      .reply(200, {});

    const req = harness.client.swarm().join();

    harness.handleSuccess(scope, 200, req, done);

  });

});
