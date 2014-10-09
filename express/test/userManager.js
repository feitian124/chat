var assert = require("assert"),
    UserManager = require('../userManager.js'),
    User = require('../user.js');

describe('userManager', function(){
  var um = new UserManager();
  describe('#push()', function(){
    it('should throw error if not User', function(){
      assert.throws(function() {
        um.push(1);
      }, Error);
    });

    it('should length +1 if ok', function(){
      var user = new User('name'),
          l1 = um.length(),
          l2 = um.push(user).length();

      assert.strictEqual(1, l2-l1);
    })
  })
})
