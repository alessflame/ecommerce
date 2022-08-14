import React from 'react'
import SingleProduct from '../../../components/SingleProduct/SingleProduct';

function index({product, comments}) {
  return (
    <div>

    <SingleProduct {...product} comments={comments}/>

    </div>
  )
}

export default index;


export const getServerSideProps=async(context)=>{

     
     const res= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/products/${context.params.id}`);
     const resComment= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/comments/${context.params.id}`);

    //  console.log(context.params.id);
     const product= await res.json();
     const comments= await resComment.json();



     return{
      props:{product,comments}
     }
}



