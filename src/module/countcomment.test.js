const commentcounter = require('./countcomment.js');
test('commentcounter function', () => {
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM('<div id="comment-count"></div>');
  global.document = dom.window.document;
  commentcounter(5);
  expect(document.getElementById('comment-count').textContent).toBe('5');
});
