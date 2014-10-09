var assert = require("assert"),
    UserManager = require('../userManager.js');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('userManager', function(){
  var um = new UserManager();
  describe('#push()', function(){
    it('should throw error if not User', function(){
      assert.throws(function() {
        um.push(1);
      }, Error);

    })
  })
})
