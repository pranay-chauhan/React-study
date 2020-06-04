import React from 'react'

class condition1 extends React.Component{
    constructor(){
        super();
        this.state ={
            isLoggedIn:true
        }
    }
    render(){
        let message;
    
            if(this.state.isLoggedIn){
                message =<div>Hello I am in Condition of the react</div>
            }
            else {  
                message =<div>Please log in the account</div>
            }
            return message

    }
}
export default condition1