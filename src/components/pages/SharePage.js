import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SharePage.css';

const SharePage = () => {
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://menu-api-kappa.vercel.app/api/utilities/web?recipeId=${recipeId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe data');
        }
        const data = await response.json();
        if (!data) {
          throw new Error('No recipe data found');
        }
        setRecipeData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (recipeId) {
      fetchRecipe();
    }
  }, [recipeId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  // Parse instructions from JSON string
  const parsedInstructions = recipeData.masterRecipe?.Instructions
    ? JSON.parse(recipeData.masterRecipe.Instructions).instructions || []
    : [];

  return (
    <div className="share-page-container">
      <h1>{recipeData.masterRecipe?.PartitionKey || 'Recipe Details'}</h1>

      {recipeData.masterRecipe?.Time && (
        <div className="recipe-time">
          <strong>Time:</strong> {recipeData.masterRecipe.Time}
        </div>
      )}

      {recipeData.masterRecipe?.URL && recipeData.masterRecipe.URL !== 'Manual' && (
        <div className="recipe-url">
          <strong>Source:</strong> <a href={recipeData.masterRecipe.URL} target="_blank" rel="noopener noreferrer">
            {recipeData.masterRecipe.Title !== 'Manual' && recipeData.masterRecipe.Title !== 'Generated'
              ? recipeData.masterRecipe.Title
              : recipeData.masterRecipe.URL}
          </a>
        </div>
      )}

      {recipeData.ingredients && recipeData.ingredients.length > 0 && (
        <div className="recipe-ingredients-section">
          <h2>Ingredients</h2>
          <ul className="recipe-ingredient-list">
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-ingredient-item">
                {ingredient.Original}
              </li>
            ))}
          </ul>
        </div>
      )}

      {parsedInstructions.length > 0 && (
        <div className="recipe-directions-section">
          <h2>Directions</h2>
          <ul className="recipe-direction-list">
            {parsedInstructions.map((instruction, index) => (
              <li key={index} className="recipe-direction-item">
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SharePage;
