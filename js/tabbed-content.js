(function() {
  // This is used for the first version or the "container-original". This
  // version roughly uses the same elements that came with the problem and I
  // thought it would be neat to create a class around this.
  var container = document.getElementById('container-original'),
  headings = container.getElementsByTagName('h3'),
  contents = container.getElementsByTagName('p');

  new Tabby(container, headings, contents);
}());

(function() {
  // This represents how I would create the HTML for the problem. I took the
  // approach of having the design represent the content. With JS, you have a
  // great detail of flexibility for moving things around. However, I felt as
  // though the markup should reflect the content, so this class reflects the
  // markup produced.
  new Tabtastic(document.getElementById('container-modified'));
}());

