(function(win) {
  var Util = {
    addClass: function(el, name) {
      if (el) {
        el.className += ' ' + name;
      }
    },

    removeClass: function(el, name) {
      if (el) {
        el.className = el.className.replace(new RegExp(' ' + name, 'g'), '');
      }
    },

    extend: function(options, defaults) {
      var key;
      options = options || {};

      for (key in defaults) {
        if (!options[key]) {
          options[key] = defaults[key];
        }
      }

      return options;
    }
  };

  win.Util = Util;
}(window));

