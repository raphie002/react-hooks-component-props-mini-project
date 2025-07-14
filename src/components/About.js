import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      {/* The <img> element displays the blog logo.
        Its 'src' attribute is conditionally set:
        - If 'image' prop is provided, it uses that.
        - Otherwise, it falls back to the 'defaultImage' URL.
        The 'alt' attribute is set to "blog logo" for accessibility,
        as required by the tests.
      */}
      <img src={image || defaultImage} alt="blog logo" />

      {/* The <p> element displays the 'about' text.
        This text typically provides a description or summary of the blog.
        The 'about' prop is directly rendered here.
      */}
      <p>{about}</p>
    </aside>
  );
}

export default About;
