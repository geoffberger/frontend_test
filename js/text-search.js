/* globals Util, Finder */
(function() {
  var el = document.getElementById('search_input'),
      template = document.getElementById('results-template').innerHTML,
      contents = document.getElementById('search_text');

  Util.addEvent(document.getElementById('search-form'), 'submit', function(e) {
    var phrase, finder;
    Util.preventDefault(e);

    phrase = document.getElementById('search_input').value;

    finder = new Finder(contents, phrase, function(occurrences) {
      var results = Util.template(template, {
        occurrences: occurrences,
        phrase: phrase
      });

      document.getElementById('results').innerHTML = results;
    });
  });
}());

