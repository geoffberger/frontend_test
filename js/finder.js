(function(win) {
  function Finder(el, phrase, result) {
    var contents = el.innerHTML,
        filtered, matches, occurrences = 0;

    if (contents) {
      if (phrase) {
        // escape any characters that won't be processed properly by the regex
        // parser
        phrase = phrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        // remove any html tags and do a modified trim
        filtered = contents.replace(/(<([^>]+)>)/ig, '').replace(/^\s+|\s+$/mg,'');
        // check for matches
        matches = filtered.match(new RegExp(phrase, 'ig'));

        if (matches) {
          occurrences = matches.length;
        }
      }

      result(occurrences);
    }
  }

  win.Finder = Finder;
}(window));
