var assert = require("assert"),
    um = require('../userManager.js'),
    User = require('../user.js');

describe('userManager', function(){
  var user = new User('name'),
      l1 = um.length(),
      l2 = um.push(user).length();

  describe('#push()', function(){
    it('should throw error if not User', function(){
      assert.throws(function() {
        um.push(1);
      }, Error);
    });

    it('should length +1 if ok', function(){
      assert.strictEqual(1, l2-l1);
    })
  })

  describe('#contains()', function(){
    var user2 = new User('name2');
    it('should work', function(){
       assert.ok(um.contains(user));
       assert.ok(!um.contains(user2));
    });
  });

})
