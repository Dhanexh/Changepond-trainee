import React, { useState } from 'react'

const FormValComp = () => {
    const [user,setUser] = useState({
        userName:"",
        userPassword:"",
        userTerm:false
    })

    const inputChangeHandler = (event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type,name,value} = event.target;
        setUser({...user,[name]:value})


    }

    const checkData = (event)=>{
        event.preventDefault();
        if(user.userName.trim()===""){
            window.alert("Username required");
            return false;
        }
        if(!user.userName.trim().match('^[a-zA-Z]{3,20}$')){
            window.alert("Username should contain 3-20 characters");
            return false;
        }

        if(user.userPassword.trim()===""){
            window.alert("Password required");
            return false;
        }
        if(!user.userPassword.trim().match('^[a-zA-Z]{3,20}$')){
            window.alert("Password should contain 3-20 characters");
            return false;
        }

        if(user.userTerm===false){
            window.alert("Accept terms & Conditions");
            return false;
        }
        window.alert(JSON.stringify(user))
    }


    return (
        <div>
            <h4>This is FormVal Component</h4>
            <form onSubmit={checkData}>
                <label>Enter Username &nbsp;&nbsp;</label><br/>
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.userName}/><br/>
                <label>Enter Password &nbsp;&nbsp;&nbsp;</label><br/>
                <input type='text' name='userPassword' onChange={inputChangeHandler} value={user.userPassword}/><br/>
                <input type='checkbox' name='userTerm' onChange={inputChangeHandler} value={user.userTerm}/>&nbsp;
                <label>Accept terms & Conditions</label><br/>
                <button type='submit' className='btn btn-primary btn-sm mt-2'>Submit</button>
            </form>
            
        </div>
    )
}

export default FormValComp
