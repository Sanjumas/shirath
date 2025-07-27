import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FoodDetailPage = () => {
  const { foodName } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Details for {foodName}</h2>
      <p>More information about {foodName} like ingredients, total sales, stock status, etc.</p>
      <Link to="/">Back to Quick Report</Link>
    </div>
  );
};

export default FoodDetailPage;
