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

    getNextSibling: function(el) {
      el = el.nextSibling;

      while (!el.tagName) {
        el = el.nextSibling;
      }

      return el;
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
        exp = new RegExp('\{\{' + key + '\}\}', 'g');
        contents = contents.replace(exp, map[key]);
      }

      return contents;
    },

    addEvent: function(el, type, func) {
      if (document.addEventListener) {
        this.addEvent = function(el, type, func) {
          if (el) {
            el.addEventListener(type, func, false);
          }
        };
      } else {
        this.addEvent = function(el, type, func) {
          var evt, evtIndex = type + func;

          if (el) {
            el['e' + evtIndex] = func;
            el[evtIndex] = function() {
              evt = window.event;
              evt.target = evt.srcElement;
              el['e' + evtIndex](evt);
            };

            el.attachEvent('on' + type, el[evtIndex]);
          }
        };
      }

      if (el && type && func) {
        this.addEvent(el, type, func);
      }
    },

    preventDefault: function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },

    loadScript: function(src) {
      var script = document.createElement('script');
      script.async = true;
      script.src = src;
      document.getElementsByTagName('head')[0].appendChild(script);
    },

    convertNodeListToArray: function(list) {
      var i, len, arr = [];

      for (i = 0, len = list.length; i < len; i++) {
        arr.push(list[i]);
      }

      return arr;
    }
  };

  win.Util = Util;
}(window));

