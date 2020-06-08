const marked = require('marked');

const renderer = new marked.Renderer();

// Ensure rel="noopener noreferrer" is present on external links
renderer.link = (href, title, text) => {
  // Match relative URLs
  // https://stackoverflow.com/questions/31430167/regex-check-if-given-string-is-relative-url#31432012
  if (href.match(/^[^/]+\/[^/].*$|^\/[^/].*$/gmi)) {
    return `<a href="${href}" ${title ? `title="${title}"` : ''}>${text}</a>`;
  }

  return `<a rel="noopener noreferrer" target="_blank" href="${href}" ${title ? `title="${title}"` : ''}>${text}</a>`;
};

module.exports = (source = '') => marked(source, {renderer});
