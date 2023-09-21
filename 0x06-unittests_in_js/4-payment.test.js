const Utils = require('./utils'); // Import the Utils module
const sinon = require('sinon'); // Import Sinon for spying
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai').expect;


describe('sendPaymentRequestToApi', () => {
  it('stub Utils.calculateNumber to always return 10', () => {
    const spyLog = sinon.spy(console);
    const calcNumberSpy = sinon.stub(Utils, 'calculateNumber');

    calcNumberSpy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calcNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNumberSpy.callCount).to.be.equal(1);
    expect(spyLog.log.calledWith('The total is: 10')).to.be.true;
    expect(spyLog.log.callCount).to.be.equal(1);
    calcNumberSpy.restore();
    spyLog.log.restore();
  });
});
