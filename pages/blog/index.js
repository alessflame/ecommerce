import React from "react";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import BlogArticle from "../../components/BlogArticle/BlogArticle";
import {articleModel} from "../../models/articleModel.js";
import {database} from "../../utils/database";



function index({articles}) {
  
  console.log(articles);

  return (
    <div>
      {/* <BlogArticle key={1}
        title="The firts Article"
        image="/vercel.svg"
        description="descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
      ></BlogArticle> */}

   <ArticlesList articles={articles}/>

    </div>
  );
}


export const getServerSideProps=async()=>{
  //  const res= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/articles`);
  //  const articles= await res.json()
   
  database();

  let articles = await articleModel.find();

   articles=await JSON.parse(JSON.stringify(articles));     
   return{
    props:{articles}
   }

}

export default index;
