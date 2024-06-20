import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdateComp = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const [itemData,setItemData] = useState({
        id:"",
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
        axios.put(`http://localhost:8888/products/${id}`,itemData).then(()=>{
            window.alert("Item updated Successfully");
            nav('/maindashboard/productdashboard');
        }).catch((error)=>{})
    }

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            setItemData(res.data);
        }).catch((error)=>{})
    },[])

    return (
        <div>
            <h4>This is ProductUpdate Component</h4>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>

                    <form onSubmit={addItem}>
                        <label className='form-label'>Enter product</label><br/>
                        <input type='text' name="pname" onChange={inputChangeHandler} value={itemData.pname} className='form-control' style={{width:"400px"}}></input><br/>

                        <label className='form-label'>Enter price</label><br/>
                        <input type='text' name="price" onChange={inputChangeHandler} value={itemData.price} className='form-control' style={{width:"400px"}}></input><br/>

                        <label className='form-label'>Enter Company</label><br/>
                        <input type='text' name="company" onChange={inputChangeHandler} value={itemData.company} className='form-control' style={{width:"400px"}}></input><br/>

                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductUpdateComp
