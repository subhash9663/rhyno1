import React from 'react';
import { useParams, Link } from 'react-router-dom';
import se03lite from '../assets/images/Pic1.jpg';
import se03Image from '../assets/images/Pic2.jpg';
import se03maxImage from '../assets/images/Pic3.png';
import '../styles/Products.css';

const productDetails = {
  'se03-lite': {
    image: se03lite,
    name: 'SE03 Lite',
    details: 'Details about SE03 Lite...',
    id: 'se03-lite',
  },
  'se03': {
    image: se03Image,
    name: 'SE03',
    details: 'Details about SE03...',
    id: 'se03',
  },
  'se03-max': {
    image: se03maxImage,
    name: 'SE03 Max',
    details: 'Details about SE03 Max...',
    id: 'se03-max',
  }
};

const Product = () => {
  const { productId } = useParams();
  const product = productDetails[productId];

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product">
      <img src={product.image} alt={product.name} /> 
      <center><h4>Select color</h4></center><br/> 
      <div className='colors'>
  <input type="button" className="btn btn-outline-primary" value="Primary" />
  <input type="button" className="btn btn-outline-secondary" value="Secondary" />
  <input type="button" className="btn btn-outline-success" value="Success" />
  <input type="button" class="btn btn-outline-danger" value="Danger" />
   <input type="button" class="btn btn-outline-warning" value="Warning" />
</div>


      <h1>{product.name}</h1>
      <p>{product.details}</p>
      <Link to={`/product-details/${product.id}`}>View Details</Link>
      <button className='buyBtn'>Buy</button>
    </div>
  );
};
export default Product;
