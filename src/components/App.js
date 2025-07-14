import React from "react";
import blogData from "../data/blog";

function App() {
  console.log(blogData); 

  return (
    <div className="App">
      {/* Header component or element */}
      <header>
        {/* Content for header, e.g., blog title */}
        <h1>{blogData.name}</h1>
      </header>

      {/* Aside component or element */}
      <aside>
        {/* Content for aside, e.g., about section */}
        <p>{blogData.about}</p>
      </aside>

      {/* Main component or element */}
      <main>
        {/* Content for main, e.g., article list */}
        {/* You're on your own from here! Follow the deliverables; test things out in
        the browser as you write your code; and good luck! */}
      </main>
    </div>
  );
}

export default App;
