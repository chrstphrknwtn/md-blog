const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const layout = require('./layout');
const markdown = require('./markdown');
const loadPost = require('./load-post');

module.exports = ({filePath, paths}) => {
  const post = loadPost(filePath);

  const html = layout({
    meta: post.attributes,
    content: markdown(post.body)
  });

  const writeDir = path.join(paths.distPosts, post.attributes.slug);
  fs.mkdirp(writeDir);
  fs.writeFile(path.join(writeDir, 'index.html'), html, () => {
    console.log(chalk.green('Rendered Post'), writeDir);
  });
};
