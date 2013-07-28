/* globals Rotator, Util */
(function(doc) {
  // This implementation uses a slightly modified version from what the
  // original supplies. The only modification to the HTML is a wrap around the
  // elements.
  var img, title, caption,
      els = doc.getElementById('image-group').getElementsByTagName('img'),
      headings = doc.getElementsByTagName('h4'),
      stage = doc.getElementById('rotator');

  title = doc.createElement('h4');
  img = doc.createElement('img');
  caption = doc.createElement('p');
  stage.appendChild(img);
  stage.appendChild(title);
  stage.appendChild(caption);

  new Rotator(els)
    .on('activate', function(el, index) {
      var heading = headings[index];
      title.innerHTML = heading.innerHTML;
      caption.innerHTML = Util.getNextSibling(heading).innerHTML;
      img.src = el.src;
    })
    .run();
}(document));

(function() {
  var oldOnload = window.onload;
  window.onload = function() {
    if (oldOnload) {
      oldOnload();
    }

  var wrap = document.getElementById('rotator-expanded'),
      els = wrap.getElementsByTagName('li');

  new Rotator(els)
    .on('deactivate', function(el) {
      Util.removeClass(el, 'fadein');
      Util.addClass(el, 'fadeout');
    })
    .on('activate', function(el, index, initial) {
      if (!initial) {
        Util.removeClass(el, 'fadeout');
        Util.addClass(el, 'fadein');
      }

      if (initial) {
        wrap.style.height = el.offsetHeight + 'px';
        Util.addClass(el, 'initial');
      }
    })
    .run();

  };

  // This contains a more modified version that reorganizes the markup in a way
  // that allows for JavaScript disabled and doesn't hinder the user's
  // experience.
}());

