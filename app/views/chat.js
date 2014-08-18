import Ember from 'ember';

export default Ember.View.extend({
  modalHidden: true,
  keyDown: function(event) {
    var name = this.get('controller.name');
    var connected = this.get('controller.connected');
    var modalHidden = this.get('modalHidden');
    if (event.which === 13) {
      if (!connected) {
        if (modalHidden && !name) { 
          this.popForName();
          this.set('modalHidden', false);
        } else {
          //below line result connect socket.io error, try find why
          this.get('controller').send('addUser');
          this.get('controller').send('sendMessage');
          Ember.$('#myModal').modal('hide');
          Ember.$('#msgInput').focus();
          this.set('modalHidden', true);
        }
      } else {
        this.get('controller').send('sendMessage');
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
