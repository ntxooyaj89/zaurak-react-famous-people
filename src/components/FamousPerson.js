import React, { Component } from 'react';

class FamousPerson extends Component {

    // Called when the component is created
    constructor() {
        // super help start up the components
        // super will only be used if we extends Components
        super();

        // if state changes it trigger another re-render
        this.state = { name: 'Tom', role: 'Supervisor' }; // Luke isn't being used...
    }

    handleName = (event) => {
        console.log(event.target.value);

        // state only happens once if re-used you'll have to setState...
        //this will set the state
        this.setState({
            // event.target is the input field
           name: event.target.value
          
            //role: event.target.value
        });

        
    }

    handleRole = (event) => {
        console.log(event.target.value);

        this.setState({
            // event.target is the input field

           role: event.target.value
        
        });


    }

    handleButton = (event) => {
        this.setState({
            name: event.target.value
        })
       

        
        
    }



    render(){
        return(
            <div>
                <input onChange = {this.handleName}
                       type="text" placeholder= "name" />

                <input onChange = {this.handleRole}
                       type="text" placeholder="role" /> 

                <button onChange = {this.handleButton}>Submit</button>
                               

            <br /> 
            <p>This is name: {this.state.name}</p> 
            <p>This is role: {this.state.role}</p>              

            </div>
        )
    }
}


export default FamousPerson;