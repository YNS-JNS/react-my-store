import { Link } from "react-router-dom";
import MyButton from "../widgets/MyButton";

const ProductCard = () => {
  return (
    <>
      {/* Card  */}
      <div className="product-card">
        {/* Image  */}
        <div className="product-image">
          <img src="" alt="product image" />
        </div>
        {/* Content  */}
        <div className="product-content">
          {/* Title  */}
          <h2>Product name</h2>
          {/* Price  */}
          <div className="product-price-zone">
            <span className="default-price">99$</span>
            <div className="current-price">
              <span className="sale-price">79$</span>
              <span className="discount-percentage">20%</span>
            </div>
          </div>
          {/* Buttons  */}
          <MyButton $bgColor="red">
            Ok
          </MyButton>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
