import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className='product-card'>
      <img src='' alt='' />
      <div className='product-info'>
        <h2>Product Name</h2>
        <p>Price: $99.99</p>
        <p>Product Description</p>
        <div className='meta-info'>
          <span>Category</span>
          <span>Stock</span>
        </div>
        <Link to='/products'>← Back to Product List</Link>
      </div>
    </div>
  );
};

export default ProductCard;
