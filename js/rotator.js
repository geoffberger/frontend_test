/*globals Util */
(function(win) {
  var defaults = {
    speed: 3000
  };

  function Rotator(els, options) {
    this.els = els;
    this.options = Util.extend(options, defaults);
    this.index = 0;
    this.length = els.length - 1;
    this.events = {};
  }

  Rotator.prototype.run = function() {
    this.rotate(true);
  };

  Rotator.prototype.rotate = function(first) {
    var self = this;

    if (!first) {
      self.trigger('deactivate', self.els[self.index], self.index);

      if (self.index === self.length) {
        self.index = 0;
      } else {
        self.index++;
      }
    }

    self.trigger('activate', self.els[self.index], self.index, first);

    setTimeout(function() {
      self.rotate();
    }, self.options.speed);
  };

  Rotator.prototype.on = function(action, callback) {
    this.events[action] = callback;
    return this;
  };

  Rotator.prototype.trigger = function() {
    var args = Array.prototype.slice.call(arguments),
        method = args.shift();

    if (this.events[method]) {
      this.events[method].apply(this, args);
    }
  };

  win.Rotator = Rotator;
}(window));

