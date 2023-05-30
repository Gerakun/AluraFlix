import React, {Fragment}  from "react";
import { Imagen } from "../UI/variables";
import error404 from "../assets/imagenes/error404.jpg"


const Page404 = () =>{
    return (
        <Fragment>
        <Imagen src={error404} alt="error 404"/>
        </Fragment>
    );
};

export default Page404;