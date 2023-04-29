const likecounter = require('./countlike.js');
test('likecounter function', () => {
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM('<p id="liked-count"></p>');
  global.document = dom.window.document;
  likecounter('liked-count', 'liked 23');
  expect(document.getElementById('liked-count').textContent).toBe('liked 23');
});
