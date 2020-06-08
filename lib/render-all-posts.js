const path = require('path');
const fs = require('fs-extra');

const renderPost = require('./render-post');

module.exports = ({paths}) => {
  fs.readdirSync(paths.srcPosts).forEach(postPath => {
    const filePath = path.join(paths.srcPosts, postPath);
    renderPost({filePath, paths});
  });
};
