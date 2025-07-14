import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {/* Iterate over the 'posts' array using the map method.
          For each 'post' object in the array, render an 'Article' component.
          Each 'Article' component receives:
          - A unique 'key' prop, which is crucial for React list rendering performance.
            We use 'post.id' as it's guaranteed to be unique for each post.
          - 'title', 'date', and 'preview' props, which correspond to the
            properties of the 'post' object and are consumed by the 'Article' component.
      */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
