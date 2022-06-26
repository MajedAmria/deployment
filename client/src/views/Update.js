import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useHistory} from "react-router-dom";
import ManagerForm from '../components/ManagerForm';
import DeleteButton from '../components/DeleteButton';
    
const Update = (props) => {
    const { id } = useParams();
    const [product,setProduct]=useState()
    const [loaded, setLoaded] = useState(false);
    const history=useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
               setProduct(res.data)
                setLoaded(true)
            })
    }, []);
    
    const updateProduct = (product) => {
        axios.put('http://localhost:8000/api/product/' + id,product)
            .then(res => setProduct(product))
            .catch(err => console.error(err));
            history.push("/");
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
    <ManagerForm
        onSubmitProp={updateProduct}
        initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} buttonClick="Update Product"
       
    />)}
    <DeleteButton productId={product._id} successCallback={() => history.push("/")} />
        </div>
    )
}
    
export default Update;