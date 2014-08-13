import Ember from 'ember';

export default Ember.View.extend({
  modalHidden: true,
  keyDown: function(event) {
    var name = this.get('controller.name');
    var connected = this.get('controller.connected');
    var modalHidden = this.get('modalHidden');
    if (event.which === 13) {
      if (name && connected) {
        this.get('controller').send('sendMessage');
      } else {
        if (modalHidden) { 
          this.popForName();
          this.set('modalHidden', false);
        } else {
          this.get('controller').send('addUser');
          Ember.$('#myModal').modal('hide');
          Ember.$('#msgInput').focus();
        }
      }
    }
  },
  popForName: function() {
    Ember.$('#myModal').on('shown.bs.modal', function () {
      Ember.$('#modalName').focus();
    });
    Ember.$('#myModal').modal('show');
  }
});
