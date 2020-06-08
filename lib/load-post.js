const fs = require('fs-extra');
const frontMatter = require('front-matter');

const validatePost = require('./validate-post');

module.exports = filePath => {
  const data = fs.readFileSync(filePath);
  const post = frontMatter(data.toString());

  validatePost({post, filePath});

  return post;
};
