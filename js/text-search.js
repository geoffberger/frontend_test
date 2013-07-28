/* globals Util, Finder */
(function() {
  var el = document.getElementById('search_input'),
      contents = document.getElementById('search_text');

  Util.addEvent(document.getElementById('search-form'), 'submit', function(e) {
    var phrase, finder;
    Util.preventDefault(e);

    phrase = document.getElementById('search_input').value;

    finder = new Finder(contents, phrase, function(occurrences) {
      var count, results, template;

      count = phrase.split(' ').length;

      if (occurrences) {
        template = document.getElementById('results-template').innerHTML;
      } else if (!phrase) {
        template = document.getElementById('no-phrase-template').innerHTML;
      } else {
        template = document.getElementById('no-results-template').innerHTML;
      }

      results = Util.template(template, {
        occurrences: occurrences,
        context: 'occurence' + ((occurrences !== 1) ? 's' : ''),
        wordCount: 'word' + ((count > 1) ? 's' : ''),
        phrase: phrase
      });

      document.getElementById('results').innerHTML = results;
    });
  });
}());

