const html = require('ragtag');

module.exports = ({meta, content, isIndex}) => {
  meta = meta || {};
  return html`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${meta.title && `${meta.title} · `}Secret Lettuce</title>
      <meta name="description" content="${meta.description ? meta.description : 'The tip of the iceberg'}" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="/index.css" />
    </head>
    <body>
      <header class="site-header">
        <h1>${isIndex ? 'Secret Lettuce' : '<a href="/">Secret Lettuce</a>'}</h1>
        <p>The tip of the iceberg</p>
      </header>
      <main class="site-content">
        ${content}
      </main>
    </body>
  </html>
  `;
};
