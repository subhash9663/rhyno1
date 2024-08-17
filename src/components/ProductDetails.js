import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css'
const productDetails = {
  'se03-lite': {
    battery: '1.8Kwh',
    maxRange: '100 km',
    motor: '1500W',
    chargingTime: '3 hours (12A)',
    batteryWarranty: '3 Years',
    maxSpeed: '50 km/hr',
    maxRangeFullSpeed: '60 km',
    maxRange45kmh: '90 km',
    otherBenefits: [
      'Fire-safe battery',
      'Range prediction',
      'Comfortable ride and safe',
    ],
    batteryFeatures: [
      'LFP with 1500 cycles',
      'Active Balancing',
      'Waterproof (IP67)',
    ],
    specification: 'Rhyno GTX Lite',
  },
  'se03': {
    battery: '2.0Kwh',
    maxRange: '120 km',
    motor: '2000W',
    chargingTime: '4 hours (12A)',
    batteryWarranty: '4 Years',
    maxSpeed: '60 km/hr',
    maxRangeFullSpeed: '70 km',
    maxRange45kmh: '100 km',
    otherBenefits: [
      'Advanced safety features',
      'Longer battery life',
      'Enhanced comfort',
    ],
    batteryFeatures: [
      'High-performance battery',
      'Smart Battery Management',
      'Water-resistant',
    ],
    specification: 'Rhyno GTX',
  },
  'se03-max': {
    battery: '2.5Kwh',
    maxRange: '150 km',
    motor: '2500W',
    chargingTime: '5 hours (12A)',
    batteryWarranty: '5 Years',
    maxSpeed: '70 km/hr',
    maxRangeFullSpeed: '80 km',
    maxRange45kmh: '120 km',
    otherBenefits: [
      'Premium safety features',
      'Extended range',
      'Superior comfort',
    ],
    batteryFeatures: [
      'Ultra-durable battery',
      'Intelligent Battery Management',
      'Fully waterproof',
    ],
    specification: 'Rhyno GTX Max',
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productDetails[productId];

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <p><strong>Battery:</strong> {product.battery}</p>
      <p><strong>Max Range (@30km/h):</strong> {product.maxRange}</p>
      <p><strong>Motor:</strong> {product.motor}</p>
      <p><strong>Charging Time:</strong> {product.chargingTime}</p>
      <p><strong>Battery Warranty:</strong> {product.batteryWarranty}</p>
      <p><strong>Max Speed:</strong> {product.maxSpeed}</p>
      <p><strong>Max Range (@full speed):</strong> {product.maxRangeFullSpeed}</p>
      <p><strong>Max Range (@45km/h):</strong> {product.maxRange45kmh}</p>
      <p><strong>Other Key Benefits:</strong></p>
      <ul>
        {product.otherBenefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <p><strong>Battery Features:</strong></p>
      <ul>
        {product.batteryFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p><strong>Specification:</strong> {product.specification}</p>
    </div>
  );
};

export default ProductDetails;
