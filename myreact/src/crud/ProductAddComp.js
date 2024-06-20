import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductAddComp = () => {
    const nav = useNavigate();
    const [itemData,setItemData] = useState({
        pname:"",
        price:"",
        company:""
    })

    const inputChangeHandler = (events)=>{
        const {type,name,value} = events.target;
        setItemData({...itemData,[name]:value});
    }

    const addItem = (event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8888/products`,itemData).then(()=>{
            window.alert("Item Added Successfully");
            nav('/maindashboard/productdashboard');
        }).catch((error)=>{})
    }

    return (
        <div>
            <h4>This is ProductAdd Component</h4>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>

                    <form onSubmit={addItem}>
                        <label className='form-label'>Enter product</label><br/>
                        <input type='text' name="pname" onChange={inputChangeHandler} value={itemData.pname} style={{width:"400px"}}></input><br/>

                        <label className='form-label'>Enter price</label><br/>
                        <input type='text' name="price" onChange={inputChangeHandler} value={itemData.price} style={{width:"400px"}}></input><br/>

                        <label className='form-label'>Enter Company</label><br/>
                        <input type='text' name="company" onChange={inputChangeHandler} value={itemData.company} style={{width:"400px"}}></input><br/>

                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductAddComp
