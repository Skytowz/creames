import React from "react";
import Footer from "./footer";
import Header from "./header";

const Template = (props) =>{
    return(
        <>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </>
    )
}

export default Template;