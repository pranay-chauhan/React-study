import React from 'react'

class condition2 extends React.Component{
    constructor(){
        super();
        this.state ={
            isLoggedIn:false
        }
    }
    render(){
        return(
            this.state.isLoggedIn ? <div>Hello is Log in is true</div>:<div>Hello is log in is false</div>
        )

    }
}
export default condition2