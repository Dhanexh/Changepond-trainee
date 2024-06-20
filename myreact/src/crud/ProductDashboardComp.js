import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const ProductDashboardComp = () => {
    const [itemData,setItemData] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = ()=>{
        axios.get(`http://localhost:8888/products`).then((res)=>{
            setItemData(res.data)
        }).catch((error)={})
    }

    const deleteItem = (id)=>{
        if(window.confirm(`Are you sure to delete the item id : ${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("Item deleted Succesfully");
                fetchData();
            }).catch((error)=>{})
        }
    }

    return (
        <div>
            <h4>This is Productdashboard Component</h4>
            <Link to="/maindashboard/productadd" className='btn btn-primary mb-2'><AddIcon/>Add</Link><br/>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className='table-dark'>
                        <th>Sr.No</th><th>Name</th><th>price</th><th>Company</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemData.length > 0 && itemData.map((val,index)=>{
                            return <tr>
                                <td>{index+1}</td>
                                <td>{val.pname}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td><Link to="/maindashboard/productupdate" className='btn btn-outline-success btn-sm'>
                                        <EditIcon/>
                                    </Link>&nbsp;
                                    <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteItem(val.id)}>
                                        <DeleteIcon/>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductDashboardComp
