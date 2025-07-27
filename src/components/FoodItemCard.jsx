import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FoodItemCard.css';

const FoodItemCard = ({ item }) => {
  return (
    <div className="food-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>Sold: {item.sold}</p>
      <Link to={`/food/${item.name}`}>View Details</Link>
    </div>
  );
};

export default FoodItemCard;
