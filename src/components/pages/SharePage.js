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

  return (
    <div className="share-page-container">
      <h1>Recipe Details</h1>
      <pre>{JSON.stringify(recipeData, null, 2)}</pre>
    </div>
  );
};

export default SharePage;
