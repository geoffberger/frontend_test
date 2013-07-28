(function(win) {
  'use strict';

  var defaults = {
    item: 'active',
    content: 'current',
    initialItem: function() {
      return this.el.getElementsByTagName('ul')[0].getElementsByTagName('a')[0]
    },
    initialContent: function() {
      return this.el.getElementsByTagName('div')[0]
    }
  };

  function Tabtastic(el, options) {
    this.el = el;
    this.options = Util.extend(options, defaults);
    this.bindToggle();
  }

  Tabtastic.prototype.bindToggle = function() {
    var self = this;

    var active = {
      content: self.options.initialContent.call(self),
      item: self.options.initialItem.call(self)
    };

    self.show(active.item, active.content);

    self.el.addEventListener('click', function(e) {
      e.preventDefault();
      var target = e.target, id;

      if (target.hash) {
        id = target.hash.substring(1);

        self.hide(active.item, active.content);

        active.content = document.getElementById(id);
        active.item = target;

        self.show(active.item, active.content);
      }
    });
  };

  Tabtastic.prototype.show = function(item, content) {
    Util.addClass(content, this.options.content);
    Util.addClass(item, this.options.item);
  };

  Tabtastic.prototype.hide = function(item, content) {
    Util.removeClass(content, this.options.content);
    Util.removeClass(item, this.options.item);
  };

  win.Tabtastic = Tabtastic;
}(window));
