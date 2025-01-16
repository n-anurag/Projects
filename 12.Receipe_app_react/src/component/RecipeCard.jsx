import React from "react";
import "../App.css"
function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <p>
        Calories: {Math.round(recipe.calories)} | Servings: {recipe.yield}
      </p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
