import React, { Component } from "react";

class Child extends Component{
        componentWillUnmount(){
                console.log("Component will unmount")
        }
        render(){
                return(
                        <>
                                <p>Im child</p>
                        </>
                )
        }
}
export default Child