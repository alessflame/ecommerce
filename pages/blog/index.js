import React from "react";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import BlogArticle from "../../components/BlogArticle/BlogArticle";



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
   const res= await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/articles`);
   const articles= await res.json()
   

   return{
    props:{articles}
   }

}

export default index;
