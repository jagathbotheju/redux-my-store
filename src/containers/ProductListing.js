import React from "react";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {});
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
