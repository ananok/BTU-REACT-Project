import React from "react"
import NewService from "../components/Service-page/AddService";
import Posts from "../components/Service-page/PostsServices.jsx";
import { useState } from "react";
const Services = () =>{
    const[data,setData]=useState([])
    const postsAdd=(item)=>{
      setData(()=>{
        return[
          ...data,
          item
        ]
      }
      )   
    }
    return (
      <div className="top-div">
         <div className="banner"></div>
        <NewService getObj={postsAdd}/>
        {
         data.map((elem, index)=>{
            return(
              <Posts key={index}  title={elem.title} image={elem.image} description={elem.description} />
            )
          })
        }
      </div>
    );

}

export default Services;