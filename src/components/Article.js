import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  return (
    <article>
      {/* The <h3> element displays the title of the blog post. */}
      <h3>{title}</h3>

      {/* The <small> element displays the date of the post.
        Its content is conditionally set:
        - If 'date' prop is provided, it uses that.
        - Otherwise, it falls back to the 'defaultDate'.
      */}
      <small>{date || defaultDate}</small>

      {/* The <p> element displays a short preview or summary of the post content. */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
