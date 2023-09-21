const Utils = require('./utils'); // Import the Utils module
const sinon = require('sinon'); // Import Sinon for spying
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai').expect;


describe('sendPaymentRequestToApi', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    logSpy.restore();
  });

  it('should log "The total is: 120" and be called once for 100 + 20', () => {
    // Call the sendPaymentRequestToApi function with 100 and 20
    sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    expect(logSpy.callCount).to.be.equal(1);
  });
});
