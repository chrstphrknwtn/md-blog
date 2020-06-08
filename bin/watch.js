const chokidar = require('chokidar');
const liveServer = require('live-server');
const chalk = require('chalk');

const paths = require('../lib/paths');
const renderPost = require('../lib/render-post');
const renderIndex = require('../lib/render-index');

chokidar.watch(paths.src).on('change', filePath => {
  try {
    renderPost({filePath, paths});
    renderIndex({paths});
  } catch (error) {
    console.error(chalk.red('Error'), error.message);
  }
});

liveServer.start({
  port: 8080,
  root: paths.dist,
  open: false,
  logLevel: 0
});

console.log(chalk.green('Server started'), 'http://localhost:8080');
