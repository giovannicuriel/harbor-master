'use strict';

const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('swarm - inspect', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/swarm')
      .reply(200, {});

    const req = harness.client.swarm().inspect();

    harness.handleSuccess(scope, 200, req, done);

  });

});
