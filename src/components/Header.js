import React from "react";

function Header({ name }) {
  return (
    <header>
      {/* The <h1> element displays the blog name.
          This is typically the main heading of the page.
      */}
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
