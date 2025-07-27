import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ingredientDetails = {
  tomatoes: {
    name: "Fresh Tomatoes",
    supplier: "Fresh Farms Ltd.",
    location: "Warehouse B-04",
    expiry: "7 Days Left"
  },
  cheese: {
    name: "Mozzarella Cheese",
    supplier: "DairyPure Co.",
    location: "Refrigerated Section A-2",
    expiry: "10 Days Left"
  },
  buns: {
    name: "Burger Buns",
    supplier: "BakeWell Supplies",
    location: "Shelf D-10",
    expiry: "5 Days Left"
  },
};

const LowStockDetailPage = () => {
  const { id } = useParams();
  const item = ingredientDetails[id];

  if (!item) {
    return <p>Item not found.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{item.name} - Detail View</h2>
      <p><strong>Primary Supplier:</strong> {item.supplier}</p>
      <p><strong>Storage Location:</strong> {item.location}</p>
      <p><strong>Expiry Date:</strong> {item.expiry}</p>
      <Link to="/">← Back to Quick Report</Link>
    </div>
  );
};

export default LowStockDetailPage;
