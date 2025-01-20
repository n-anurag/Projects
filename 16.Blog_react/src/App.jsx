import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [search, setSearch] = useState(""); // Search query state

  const URL =
    "https://newsapi.org/v2/everything?q=tesla&from=2024-12-20&sortBy=publishedAt&apiKey=bdfa016b011e4c8a9b672e04d04590f3";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(URL); // Correct fetch syntax
        const data = await response.json(); // Parse response into JSON
        setPosts(data.articles.slice(0, 10)); // Save the first 10 articles
      } catch (error) {
        console.error("Error Fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading after fetching is complete
      }
    };
    fetchPosts();
  }, []); // Runs only once when the component mounts

  // Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Blog</h1>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginTop: "1rem", padding: "0.5rem", fontSize: "1rem" }}
        />
      </header>

      <main>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="post-list">
            {filteredPosts.map((post) => (
              <div key={post.url} className="post">
                <p>Author :{post.author}</p>
                <p>Title :{post.title}</p>
                <p>{post.description}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default App;
