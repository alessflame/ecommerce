import React from 'react'
import SingleProduct from '../../../components/SingleProduct/SingleProduct';
import {database} from "../../../utils/database"
import {commentModel} from "../../../models/commentModel"
import {userModel} from "../../../models/userModel"
import {productModel} from "../../../models/productModel"


function index({product, comments}) {
  return (
    <div>

    <SingleProduct {...product} comments={comments}/>

    </div>
  )
}

export default index;


export const getServerSideProps=async(context)=>{

     
    //  const res= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/products/${context.params.id}`);
    //  const resComment= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/comments/${context.params.id}`);

    // //  console.log(context.params.id);
    //  const product= await res.json();
    //  const comments= await resComment.json();
    database();

  let product = await productModel.findById(context.params.id);
  product= await JSON.parse(JSON.stringify(product));
       
  let comments = await commentModel.find({ id_item: context.params.id });
  comments= await JSON.parse(JSON.stringify(comments));


    let elements = [];
    console.log(elements);

    for (let index = 0; index < comments.length; index++) {
      let user = await userModel.findById(comments[index].id_user);
      user= await JSON.parse(JSON.stringify(user));


      elements.push({
        _id: comments[index]._id,
        name: user.username,
        content: comments[index].content,
      });
    }


     return{
      props:{product,comments:elements}
     }
}



