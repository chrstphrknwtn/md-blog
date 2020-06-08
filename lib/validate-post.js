module.exports = ({post, filePath}) => {
  ['date', 'slug', 'title'].forEach(attr => {
    if (!post.attributes[attr]) {
      throw new Error(`'${attr}' attribute is missing for post ${filePath}`);
    }
  });
};
