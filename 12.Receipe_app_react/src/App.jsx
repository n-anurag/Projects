import React, { useState } from "react";
import RecipeList from "./component/RecipeList";
import "./App.css"

function App() {
  const [query, setQuery] = useState(""); // Search query
  const [recipes, setRecipes] = useState([]); // Recipe results

  const API_URL = "https://api.edamam.com/api/recipes/v2";
  const API_ID = "744b3033";
  const API_KEY = "df7fcfc975ca6504e862560f0609e821";

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `${API_URL}?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits); // Edamam returns recipes in a 'hits' array
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;