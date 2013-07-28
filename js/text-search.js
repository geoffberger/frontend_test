(function() {
  var el = document.getElementById('search_input'),
      template = document.getElementById('results-template').innerHTML,
      contents = document.getElementById('search_text');

  document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var phrase = document.getElementById('search_input').value;

    new Finder(contents, phrase, function(occurrences) {
      var results = Util.template(template, {
        occurrences: occurrences,
        phrase: phrase
      });

      document.getElementById('results').innerHTML = results;
    });
  });
}());

