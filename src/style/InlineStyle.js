import React from 'react';

class inlineStyle extends React.Component{
    render(){
        const btnStyle = {
        color:'red',
        backgroundColor:'orange'
        }
        const btnCss ={
            fontSize:'40px'
        }
        return(
            <div>
                <p style={btnStyle}>Inline style</p>
                {/* //If we wan to give style element inline then we can use the spread operator in following way */}
                <h3 style={{...btnStyle,...btnCss}}>I am using multiple element</h3>
            </div>
            

        )
    }
}
export default inlineStyle