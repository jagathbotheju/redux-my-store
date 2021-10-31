import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  let product = useSelector((state) => state.product);
  const { id, title, price, description, category, image } = product;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  console.log(product);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div className="d-flex align-items-center vh-100">
          <div className="container">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      ) : (
        <div className="container m-5">
          <div className="card w-50%">
            <div className="row g-0">
              <div className="col-4">
                <img className="img-fluid m-4" src={image} alt={title} />
              </div>
              <div className="col-8">
                <div className="card-body ms-5">
                  <h4 className="card-title">{title}</h4>
                  <div className="card-text badge rounded-pill bg-primary my-2 fs-5">
                    {price}
                  </div>
                  <div className="card-text p-3 my-3 bg-light">{category}</div>
                  <div className="card-text">{description}</div>
                  <button className="btn btn-warning my-5">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
