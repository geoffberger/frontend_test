/* globals Util */
(function(win) {
  'use strict';

  var defaults = {
    anchor: 'active',
    content: 'current'
  };

  function Tabby(container, headings, contents, options) {
    this.container = container;
    this.headings = headings;
    this.contents = contents;
    this.options = Util.extend(options, defaults);
    this.menu = {};
    this.active = {};

    this.buildMenu();
    this.setupDefaults();
    this.bindToggle();
    this.listenForHashChange();
  }

  Tabby.prototype.setupDefaults = function() {
    this.active = {
      content: this.contents[0],
      anchor: this.menu.getElementsByTagName('a')[0]
    };

    this.show(this.active.anchor, this.active.content);
  };

  Tabby.prototype.buildMenu = function() {
    var i, len, el, output = [],
        titles = Util.convertNodeListToArray(this.headings);

    this.menu = document.createElement('ul');

    for (i = 0, len = titles.length; i < len; i++) {
      el = titles[i];
      output.push('<li><a data-id="', i, '" href="#', i, '">', el.innerHTML, '</a></li>');
      el.parentNode.removeChild(el);
    }

    this.menu.id = 'tabby-menu';
    this.menu.className = 'tabbed-menu';
    this.menu.innerHTML = output.join('');
    this.container.parentNode.insertBefore(this.menu, this.container);
  };

  Tabby.prototype.bindToggle = function() {
    var self = this;

    Util.addEvent(self.menu, 'click', function(e) {
      var target = e.target, id;

      if ((id = target.getAttribute('data-id'))) {
        self.sendToTab(id, target);
      }
    });
  };

  Tabby.prototype.sendToTab = function(index, target) {
    var content = this.contents[index];
    location.hash = index;

    if (content !== this.active.content) {
      this.hide(this.active.anchor, this.active.content);
      this.show(target, content);

      this.active = {
        content: content,
        anchor: target
      };
    }
  };

  Tabby.prototype.listenForHashChange = function() {
    var self = this;

    if (location.hash) {
      var id = location.hash.substring(1),
          anchors = self.menu.getElementsByTagName('a');

      if (anchors[id]) {
        self.sendToTab(id, anchors[id]);
      }
    }
  };

  Tabby.prototype.show = function(anchor, content) {
    Util.addClass(anchor, this.options.anchor);
    Util.addClass(content, this.options.content);
  };

  Tabby.prototype.hide = function(anchor, content) {
    Util.removeClass(anchor, this.options.anchor);
    Util.removeClass(content, this.options.content);
  };

  win.Tabby = Tabby;
}(window));
