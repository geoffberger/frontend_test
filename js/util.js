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
    },

    template: function(contents, map) {
      var key, exp;

      for (key in map) {
        exp = new RegExp('\{\{' + key + '\}\}');
        contents = contents.replace(exp, map[key]);
      }

      return contents;
    }
  };

  win.Util = Util;
}(window));

