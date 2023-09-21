const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should equal 2 positive numbers', () => {
      const result = calculateNumber('SUM', 3.0, 2.0);
      assert.strictEqual(result, 5);
    });

    it('should equal 2 negative numbers', () => {
      const result = calculateNumber('SUM', -3.0, -2.0);
      assert.strictEqual(result, -5);
    });

    it('should equal 2 positive numbers (alternative)', () => {
      const result = calculateNumber('SUM', 5.3, 4.1);
      assert.strictEqual(result, 9);
    });

    it('should equal negative and positive numbers', () => {
      const result = calculateNumber('SUM', -3.0, 3.0);
      assert.strictEqual(result, 0);
    });
	
    it('should equal 0 and a 0', () => {
      const result = calculateNumber('SUM', 0.0, 0.0);
      assert.strictEqual(result, 0);
    });
  });

  describe('SUBTRACT operations', () => {
    it('should equal positive numbers', () => {
      const result = calculateNumber('SUBTRACT', 3.0, 2.0);
      assert.strictEqual(result, 1);
    });

    it('should equal 2 positive numbers (alternative)', () => {
      const result = calculateNumber('SUBTRACT', 3.0, 3.0);
      assert.strictEqual(result, 0);
    });

    it('should equal 2 negative numbers', () => {
      const result = calculateNumber('SUBTRACT', -3.0, -2.0);
      assert.strictEqual(result, -1);
    });

    it('should equal 2 negative numbers (alternative)', () => {
      const result = calculateNumber('SUBTRACT', -2.0, -2.0);
      assert.strictEqual(result, 0);
    });

    it('should equal a positive and negative number', () => {
      const result = calculateNumber('SUBTRACT', -2.0, 2.0);
      assert.strictEqual(result, -4.0);
    });

    it('should equal 0 and a 0', () => {
      const result = calculateNumber('SUBTRACT', 0.0, 0.0);
      assert.strictEqual(result, 0);
    });
  });

  describe('DIVIDE operations', () => {
    it('should equal 2 positive numbers', () => {
      const result = calculateNumber('DIVIDE', 6.0, 3.0);
      assert.strictEqual(result, 2);
    });

    it('should equal 2 positive numbers', () => {
      const result = calculateNumber('DIVIDE', 6.0, 3.0);
      assert.strictEqual(result, 2);
    });

    it('should equal 2 negative numbers', () => {
      const result = calculateNumber('DIVIDE', -6.0, -3.0);
      assert.strictEqual(result, 2);
    });

    it('should equal negative and positive numbers', () => {
      const result = calculateNumber('DIVIDE', -7.0, 2.0);
      assert.strictEqual(result, -3.5);
    });

    it('should equal round up numbers', () => {
      const result = calculateNumber('DIVIDE', 5.3, 0);
      assert.strictEqual(result, 'Error');
    });
  });
});
