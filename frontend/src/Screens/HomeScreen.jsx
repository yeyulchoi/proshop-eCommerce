import React from 'react'
import {useEffect, useState} from 'react'
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
// import products from '../products'//not using this. since not using next.js, we use useEffect hook in order to fetch the data
import Product from '../components/Product';
import axios from 'axios'


const HomeScreen = () => {
  const [products, setProducts]= useState([])

  useEffect(()=>{
    const fetchProducts =async()=>{
      const response=await axios.get('/api/products') // axios make request return a promise that resolve to a response objects. 
      const data =  response.data                                               // th e response object has properties: data, status, headers etc.
      // data is arry of objects.
      setProducts(data)                                                    // by using destructuring assignment  responseObj= {data :xx, status:bb, headers:cc}- {data} is equal to values. 
    }  
    fetchProducts()                                                             //  const {data}=await axios.get('/api/products') 
  },[]) 
  //if the dependencies' values in array change, then the useEffect's function is going to run // only want it to run once, just leave it as empty array


  return (
    <>
      
      <Row>
        {products.map((product)=>(
            <Col sm={12} md={6} lg={4} xl={3}  key={product._id}>
                <Product product ={product}/>
            </Col>
        ))}
        
      </Row>
    </>
  )
}

export default HomeScreen
