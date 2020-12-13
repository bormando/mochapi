const axios = require('axios');
const assert = require('chai').assert;

describe('price data', () => {
    let data;
    before(async () => {
        await axios.get('https://api-pub.bitfinex.com/v2/ticker/tBTCUSD')
            .then((response) => {
                data = response;
            });
    });

    it('has 200 response code', () => {
        assert.equal(data.status, 200, 'the response code is not 200');
    });

    it('contains 10 values', () => {
        assert.equal(Object.keys(data.data).length, 10, 'number of values is not 10');
    });

    it('values should be numbers', () => {
        for (const value of data.data) {
            assert.isNumber(value, `value '${value}' is not a number`);
        }
    });
});