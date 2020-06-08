const path = require('path');
const fs = require('fs-extra');
const html = require('ragtag');
const chalk = require('chalk');

const layout = require('./layout');
const loadPost = require('./load-post');

module.exports = ({paths}) => {
  const posts = fs.readdirSync(paths.srcPosts).map(postPath => {
    const filePath = path.join(paths.srcPosts, postPath);

    return loadPost(filePath);
  });

  const content = html`
    <ul class="post-list">${posts.map(post => html`
      <li>
        <a href="/posts/${post.attributes.slug}">${post.attributes.title}</a>
        <p>${post.attributes.description}</p>
      </li>`)}
    </ul>
  `;

  const indexHmtl = layout({content, isIndex: true});

  fs.mkdirp(paths.dist);
  fs.writeFile(path.join(paths.dist, 'index.html'), indexHmtl, () => {
    console.log(chalk.green('Rendered Index'));
  });
};
