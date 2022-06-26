import React,{useState,useEffect} from 'react'
import { Link} from "react-router-dom";
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ManagerShow = (props) => {
    
    const [products, setProducts] = useState([]);
   
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>{
            setProducts(res.data);
           
        })
        .catch(err=>console.error(err));
    },[products]);

    const removeFromDom = (productId) => {
        setProducts(products.filter(products => products._id != productId));
    }

  return (
    <div>
        <h1>All Products</h1>
        
        {props.products.allProducts.map( (product, i) =>
            <p key={i}><Link to={"/api/product/"+product._id} >{product.title}</Link>
            ||
            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/></p>
            )}
    </div>
  )
}

export default ManagerShow;