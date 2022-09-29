import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import data from '../../../data';
import Footer from '../../Footer/Footer';
import axios from 'axios';

import "./home.css"

const Home = () => {
 const [dataItem, setDataItem] = useState(data);
 const [isChecked, setIsChecked] = useState([]);  

 function getProduct(){
    axios.get("http://127.0.0.1:80/scandiweb-api/index.php").then(function(response){
    setDataItem(response.data);
    console.log(response.data);
    })
  }
  useEffect(()=>{
    getProduct();
  },[]);

  const handleCheck = (e)=>{
    const {value, checked} = e.target; 
    if(checked){
      setIsChecked([...isChecked, value]);
    }else{
      setIsChecked(isChecked.filter((e)=>e!==value));
    }
  }
  const MassDelete = () =>{
     axios
     .delete(`http://127.0.0.1:80/scandiweb-api/index.php/${isChecked}`)
     .then(function(data){
      getProduct();
      setIsChecked([]);
     })
  }
  return (
    <>
        <section className="home__header">
          <div className="home__wrapper">
              <div className="product__title">
                <h1>Product List</h1>
              </div>
              <div className="control__btns">
                <Link to="/products"><button className='btn'>ADD</button></Link>
                <button className='btn' onClick={()=>MassDelete()}>Mass Delete</button>
              </div>
          </div>
        </section>
        <section className='products'>
          <div className="product__wrapper">
            {dataItem.map((item, index)=>{
              return (
                  <div className="product" key={index}>
                    <input type="checkbox" value={item.sku} checked={item.isChecked} onChange={(e)=>handleCheck(e)}/>
                     <div className="product__description">
                      <p>Pro.Num: {item.sku}</p>
                      <p>Pro.Name: {item.productname}</p>
                      <p>Price: ${item.price}</p>
                      {item.fWeight > 0 ? <p>Weight: {item.fWeight}KG</p>:""}
                    {item.size > 0 ? <p>{item.size}MB</p>:""}
                    {(item.height > 0 && item.fLength && item.Width)? <p>Height: {item.height}CM <br/> Length: {item.fLength}CM <br/> Width: {item.Width}CM</p>:""}
                </div>
              </div>
              )
            })}
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Home