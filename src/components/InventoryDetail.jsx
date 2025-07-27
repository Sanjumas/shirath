import React from 'react';
import '../styles/InventoryDetail.css'; // Assuming you have a CSS file for styling

const InventoryDetail = () => {
  return (
    <div className="inventory-detail">
      <h2>Premium Coffee Beans</h2>
      <p><strong>Supplier:</strong> Global Coffee Co.</p>
      <p><strong>Location:</strong> Warehouse A-12</p>
      <p><strong>Expiry:</strong> 15 Days Left</p>
      <p><strong>Stock:</strong> 5 Items</p>
      <p><strong>Value:</strong> $12,450</p>
      <p><strong>Waste %:</strong> 2.3%</p>
    </div>
  );
};

export default InventoryDetail;
