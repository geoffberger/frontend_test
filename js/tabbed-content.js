(function() {
  var container = document.getElementById('container-original'),
  headings = container.getElementsByTagName('h3'),
  contents = container.getElementsByTagName('p');

  new Tabby(container, headings, contents);
}());

(function() {
  new Tabtastic(document.getElementById('container-modified'));
}());

