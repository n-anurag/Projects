import React from "react";
import RecipeCard from "./RecipeCard.jsx";
import "../App.css"

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))
      ) : (
        <p>No recipes found. Try searching for something else!</p>
      )}
    </div>
  );
}

export default RecipeList;
