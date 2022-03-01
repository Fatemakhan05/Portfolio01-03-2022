   import React from 'react'
   import "./Product.css"
   import "../../../Data"
   function Product({image,link}) {
     return (
       <div className='p'>
         <div className="p-browser">
             <div className="p-circle">

             </div>
             <div className="p-circle">
                 
             </div>
             <div className="p-circle">
                 <a href= {link} target="_blank" rel='noreferrer'>
                    <img src={image} alt="" className='p-img' /> 
                 </a>
                 
             </div>
               
         </div>
       </div>
        
     )
   }
   
   export default Product
   
