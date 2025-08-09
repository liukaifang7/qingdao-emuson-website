import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <li className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default ServiceCard;