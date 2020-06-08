const fs = require('fs-extra');
const chalk = require('chalk');

const paths = require('../lib/paths');
const renderAllPosts = require('../lib/render-all-posts');
const renderIndex = require('../lib/render-index');

try {
  fs.emptyDirSync(paths.distPosts);
  renderAllPosts({paths});
  renderIndex({paths});
} catch (error) {
  console.error(chalk.red('Error'), error.message);
}
