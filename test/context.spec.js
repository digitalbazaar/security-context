/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, CONTEXT_URL, CONTEXT,
  SECURITY_CONTEXT_V1_URL, SECURITY_CONTEXT_V2_URL
} = require('..');

describe('Example Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(SECURITY_CONTEXT_V1_URL).to.exist;
    expect(SECURITY_CONTEXT_V2_URL).to.exist;
    expect(CONTEXT_URL).to.exist;
    expect(CONTEXT).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(SECURITY_CONTEXT_V2_URL)).to.have.property('@context');
  });
});
