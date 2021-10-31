import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products.map((product) => {
        const { id, title, price, category, image } = product;

        return (
          <div
            className="card m-3 shadow"
            style={{ width: "300px", height: "350px" }}
            key={id}
          >
            <Link to={`/product/${id}`}>
              <img
                src={image}
                alt={title}
                className="card-image-top p-3 mx-auto"
                style={{ maxWidth: "200px", height: "200px" }}
              />
            </Link>
            <div className="card-body">
              <h6 className="card-title">{title}</h6>
              <p className="card-text m-0 p-0 fw-bold">{`$ ${price}`}</p>
              <p className="card-text m-0 p-0">{category}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
