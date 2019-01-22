import React, { Component } from 'react';

class Home extends Component {

    handleClick = () =>{
        this.props.history.push('/famousPerson');
    }
   

    render(){

       
        return(
            <div>
                <h1>HOME</h1>
                <button onClick={this.handleClick}>Go to Famous Person</button>
            </div>
        )
    }
}

export default Home;