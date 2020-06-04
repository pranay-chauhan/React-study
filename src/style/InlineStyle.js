import React from 'react';

class inlineStyle extends React.Component{
    render(){
        const btnStyle = {
        color:'red',
        backgroundColor:'orange'
        }
        return(
            <div style={btnStyle}>
                hello Inline style
            </div>
        )
    }
}
export default inlineStyle