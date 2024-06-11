
import './ProductGalleryStyle.css';

function ProductGallery({ products }) {
  return (
    <div className="product-gallery">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGallery;
