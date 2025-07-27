import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/QuickReport.css';
import FoodItemCard from './FoodItemCard';
import burgerImg from '../assets/burger.png';
import pizzaImg from '../assets/pizza.png';
import pastaImg from '../assets/pasta.png';

const QuickReport = () => {
  const topItems = [
    { name: "Gourmet Burger", sold: 124, img: burgerImg, price: "₹299" },
    { name: "Supreme Pizza", sold: 98, img: pizzaImg, price: "₹499" },
    { name: "Pasta Alfredo", sold: 76, img: pastaImg, price: "₹399" },
  ];

  const lowStock = [
    { name: "Fresh Tomatoes", qty: 2, id: "tomatoes" },
    { name: "Mozzarella Cheese", qty: 5, id: "cheese" },
    { name: "Burger Buns", qty: 3, id: "buns" },
  ];

  return (
    <div className="quick-report">
      <div className="top-filters">
        <button>Today</button>
        <button>Yesterday</button>
        <button>This Week</button>
        <button>Last Week</button>
      </div>

      <div className="metrics">
        <div className="card critical">Low Ingredients: 12</div>
        <div className="card success">Daily Sales: $124.5k</div>
        <div className="card info">Orders: 847</div>
        <div className="card danger">Waste Value: 3.2%</div>
      </div>

      <h2>Top Selling Items</h2>
      <div className="food-list">
        {topItems.map((item, idx) => (
          <FoodItemCard key={idx} item={item} />
        ))}
      </div>

      <h2>Low Stock Ingredients</h2>
      <div className="food-list">
        {lowStock.map((item) => (
          <div className="food-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.qty} units left</p>
            <Link to={`/lowstock/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickReport;
