import React from 'react'
import FormProduct from './FormProduct'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({
        productName: "",
        productCategory: "",
        productPrice: "",
        productDescription: "",
        productImage1: null
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
      if(e.target.name === "productImage1"){
          setProductInfo({
              ...productInfo,
              productImage1: e.target.files[0],
          })
      } else {
      setProductInfo({
          ...productInfo,
          [e.target.name]: e.target.value
      })
    }
  }


  const createProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productInfo.productName);
    formData.append("productCategory", productInfo.productCategory);
    formData.append("productPrice", productInfo.productPrice);
    formData.append("productDescription", productInfo.productDescription);
    formData.append("productImage1", productInfo.productImage1);
       console.log(productInfo.productName);
       console.log(productInfo.productCategory);
       console.log(productInfo.productPrice);
       console.log(productInfo.productDescription);
       console.log("productImage1: ", productInfo.productImage1);
      fetch("http://localhost:8080/product/add", {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data);
        setProductInfo({
          productName: "",
          productCategory: "",
          productPrice: "",
          productDescription: "",
          productImage1: null
        });
        navigate("/");
      })
      .catch(err => console.log(err));
  };


  return (
    <div>
      <h2>Create Product</h2>
      <FormProduct
        // productInfo={productInfo}
        // setProductInfo={setProductInfo}
        errors={errors}
        changeHandler={changeHandler}
        submitProduct={createProduct}
        submitValue="Create Product" 
      />
    </div>
  )
}

export default CreateProduct;