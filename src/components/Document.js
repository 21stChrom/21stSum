import React from 'react';

function Document ({ document, searchResults }) {
  const { title, author, pages, chapters, content } = document;

  const highlightedContent = content.replace(
    new RegExp(searchResults.join('|'), 'gi'),
    (match) => `<mark>${match}</mark>`
  );

  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>Pages: {pages}</p>
      <p>Chapters: {chapters}</p>
      <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />
    </div>
  );
};

export default Document;