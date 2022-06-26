import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ManagerForm from '../components/ManagerForm';
import ManagerShow from '../components/ManagerShow';
export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err=>console.error(err));
    },[products]);
    const removeFromDom = productId => {
        setProducts(products.filter(products => products._id != productId));
    }

    
   

    const createProduct=(product)=>{
    axios.post('http://localhost:8000/api/manager', product)
            .then(res=>setProducts([...products,res.data]))
       
    }
    return (
        <div>
            <ManagerForm   onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" buttonClick="Create Product"/>
            <hr/>
            {loaded && <ManagerShow products={products}  removeFromDom={removeFromDom}/>}
        </div>
    )
}