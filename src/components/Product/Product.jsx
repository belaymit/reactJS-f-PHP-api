import React,{useState, useEffect, useMemo} from 'react';
import DynamicForm from '../dynamicForm/DynamicForm';
import axios from "axios";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form"; 

import "./product.css"

const formElements = [
  {
    label:"SKU",
    inputType:"text",
    placeHolder:"Input Product Id",
    name:"sku"
  },
  {
    label:"ProductName",
    inputType:"text",
    placeHolder:"Input Product Name",
    name:"productname"
  },
  {
    label:"Price",
    inputType:"text",
    placeHolder:"Input Product Price in $",
    name:"price"
  },

]
const selectedInput = [
  {
    label:"Size(MB/GB/KB)",
    inputID:"size",
    dataset:"DVD",
    inputType:"number",
    placeHolder:"Input size in MB, KB or GB",
    name:"size"
  },
  {
   
    label:"Height(CM)",
    inputID:"height",
    inputType:"number",
    dataset:"Furniture",
    placeHolder:"Input product height in CM",
    name:"height"
  },
  {
    
    label:"Width(CM)",
    inputID:"width",
    inputType:"number",
    dataset:"Furniture",
    placeHolder:"Input product Width in CM",
    name:"Width"
  },
  {
    
    label:"Length(CM)",
    inputID:"length",
    inputType:"number",
    dataset:"Furniture",
    placeHolder:"Input product length in CM",
    name:"fLength"
  },
  {
   
    label:"Weight(Kg)",
    inputID:"weight",
    inputType:"number",
    dataset:"Book",
    placeHolder:"Input product weight in kg",
    name:"fWeight"
  },

]
const Product = () => {

  const {reset} = useForm();
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const initialState = {
          sku:"",
          productname:"",
          price:0,
          size:0,
          productType:"",
          height:0,
          fLength:0,
          fWeight:0,
          Width:0,
  }
  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    setProductList(selectedInput);
  }, []);

  function getFilteredList() {
    if (!selectedProduct) {
      return productList;
    }
    return productList.filter((item) => item.dataset === selectedProduct);
    
  }
  const filteredList = useMemo(getFilteredList, [selectedProduct, productList]);

  function handleChange(event) {
    setSelectedProduct(event.target.value);
    setIsVisible(true);
  }
  
  const handleFormChange = (e) =>{
      setFormData(()=>({
        ...formData,
        [e.target.name]:e.target.value
      }))
  }
  const onSubmit =  (e) =>{
    e.preventDefault();
    axios.post("http://127.0.0.1:80/scandiweb-api/index.php",formData) 
    console.log(formData);
    setFormError(validate(formData));
    setIsSubmit(true);
    navigate('/');
  }

  const validate = (values) =>{
    const errors = {};
    const priceRegex = /^([0-9]{0,2}((.)[0-9]{0,2}))$/;
     if(!values.sku){
      errors.sku = "Product-id is required";
     }
     if(!values.productname){
      errors.productname = "Product-name cannot be empty";
     }else if(values.productname < 3){
        errors.productname = "Product name must be at least three characters";
     }else if(values.productname>50){
      errors.productname = "Use at most fifty characters";
     }
     if(!values.price){
      errors.price = "The product must have specified price";
     }else if(!priceRegex.test(values.price)){
      errors.price = "The price of the product must satisfy [([0-9]{0,2}((.)[0-9]{0,2}))$/]";
     }
     if(!values.size){
      errors.size = "Please fill in the size of the product in KB, MB or GB";
     }
     if(!values.length){
      errors.length = "The product must have length dimension";
     }
     if(!values.width){
      errors.width = "The product must have width dimension";
     }
     if(!values.height){
      errors.height = "The product must have height dimension";
     }
     return errors;
  };
  const handleReset = ()=>{
    reset();
    setIsSubmit(false);
    navigate('/');
  }
  return (
      <div className="container">
        <section className="wrapper">
           <div className="form__header">
             <h3>Add New Product</h3>
             <div className="form__button">
                <button className="btn save-btn" type='submit' onClick={onSubmit} name="save">Save</button>
                <button className="btn cancel-btn" onClick={handleReset}>Cancel</button>
             </div>
           </div>
            <div className="form__container">
              <form 
                  id="product_form" 
                  onChange={handleFormChange} >
                {formElements.map((formElement, index)=>{
                  return(
                  <div className="formInput" key={index}>
                    <label>{formElement.label}</label>
                    <input 
                          type={formElement.inputType} 
                          placeholder={formElement.placeHolder}
                          name={formElement.name}
                          />
                          <p>{formError && formError[formElement.name]}</p>
                  </div> 
                  )
                })}
                <select 
                      name="productType" 
                      onChange={handleChange} 
                      id="productType">
                        <option value=""> --Choose a product-- </option>
                        <option value="DVD">DVD</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Book">Book</option>
                  </select>
                  {isVisible &&
                  (<section className="controled__input">
                        {filteredList.map((element, index) => (
                          <DynamicForm {...element} key={index} />
                            ))}
                    </section>)
                  }
                      
              </form>
            </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Product