'use strict';
const axios = require('axios').default;
const assert = require('assert');


const getPeople = () => {
    axios.get('https://randomuser.me/api/?results=5')
    .then(function (response){
        console.log(response);
    }
    .catch(function (error) {
        console.log(error)
    })
    .then((address) => (contactArray = address.results));
        console.log(address.results)
  };

if (typeof describe === 'function') {
    describe('getAddress()', () => {
        it('should return fetch with the same # of results in the url', () => {
            getPeople()
            assert.equal(address.results.length, 5);
        });
        it('should register as out of range', () => {
            getPeople()
            assert.equal((address.results.length) > 5);
        })
    })
}