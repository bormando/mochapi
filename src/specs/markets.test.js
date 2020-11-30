const axios = require('axios');
const assert = require('chai').assert;

describe('price data', () => {
    let data;
    before(async () => {
        await axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
            .then((response) => {
                data = response;
            });
    });

    it('has 200 response code', () => {
        assert.equal(data.status, 200, 'the response code is not 200');
    });

    it('contains 8 values', () => {
        assert.equal(Object.keys(data.data).length, 8, 'number of values is not 8');
    });

    it('values should be strings', () => {
        for (const [key, value] of Object.entries(data.data)) {
            assert.isString(value, `value of key '${key}' is not a string`);
        }
    });
});