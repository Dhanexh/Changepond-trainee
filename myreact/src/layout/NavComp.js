import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            <br/>
            {/* <h4>This is Nav Component</h4> */}
            <Link to="myslider" className='btn btn-primary btn-sm'>MySlider</Link>{" "}
            <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}
            <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
            <Link to="reacthook" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
            <Link to="virtualdom" className='btn btn-primary btn-sm'>VirtualDom</Link>{" "}
            <Link to="formval" className='btn btn-primary btn-sm'>FormVal</Link>{" "}
            <Link to="productdashboard" className='btn btn-warning btn-sm'>CRUD</Link>{" "}
        </div>
    )
}

export default NavComp
