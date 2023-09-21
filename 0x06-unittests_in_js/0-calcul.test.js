const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  it('should round and sum two positive numbers', () => {
    const result = calculateNumber(5.3, 7.8);
    assert.strictEqual(result, 13);
    // Rounded 5.3 + rounded 7.8 = 5 + 8 = 13
  });

  it('should round and sum two negative numbers', () => {
    const result = calculateNumber(-5.3, -7.8);
    assert.strictEqual(result, -13);
    // rounded -5.3 + rounded -7.8 = -5 + -8 = -13
  });

  it('should round and sum numbers with decimal parts < 0.5', () => {
    const result = calculateNumber(5.2, 7.4);
    assert.strictEqual(result, 12);
    // rounded 5.2 + rounded 7.4 = 5 + 7 = 12
  });

  it('should round and sum numbers with decimal parts >= 0.5', () => {
    const result = calculateNumber(5.8, 7.6);
    assert.strictEqual(result, 14);
    // rounded 5.8 + rounded 7.6 = 6 + 8 = 14
  });

  it('should round and sum positive and negative numbers', () => {
    const result = calculateNumber(5.3, -7.8);
    assert.strictEqual(result, -3);
    // Rounded 5.3 + Rounded -7.8 = 5 + -8 = -3
  });

});
