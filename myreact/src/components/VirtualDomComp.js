import React, { Component } from 'react'

class VirtualDomComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            breakfast:[
                {id:1, name:"Poha"},
                {id:2, name:"dosa"},
                {id:3, name:"idli"},
                {id:4, name:"Upma"}
            ]
        }

        // setTimeout(()=>{
        //     let breakfastArray = this.state.breakfast;
        //     let itemIndex = this.state.breakfast.findIndex((val)=>val.id===3);
        //     let item = this.state.breakfast
        // })
    }
    
    render() {
        return (
            <div>
                <h4>This is VirtualDom Component</h4>
                <ul>
                    {this.state.breakfast.map((val,index)=>{
                        // return <li key={val.id}>{val.name}</li>
                        return <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default VirtualDomComp

