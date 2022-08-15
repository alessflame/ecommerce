import React from "react";
import BlogArticle from "../../../components/BlogArticle/BlogArticle";
import { database } from "../../../utils/database";
import {articleModel} from "../../../models/articleModel";
import {commentModel} from "../../../models/commentModel";
import {userModel} from "../../../models/userModel"


function singleArticle({ article, comments }) {
  return (
    <div>
      <BlogArticle {...article} comments={comments} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/articles/${context.params.id}`
  // );
  // const resComment = await fetch(
  //   `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/comments/${context.params.id}`
  // );
  // const article = await res.json();
  // const comments = await resComment.json();

  database();

  let article = await articleModel.findById(context.params.id);
  article=await JSON.parse(JSON.stringify(article));   
  
  let comments = await commentModel.find({ id_item: context.params.id });
  comments= await JSON.parse(JSON.stringify(comments)); 

    let elements = [];
    console.log(elements);

    for (let index = 0; index < comments.length; index++) {
      let user = await userModel.findById(comments[index].id_user);
      user=await JSON.parse(JSON.stringify(user)); 

      elements.push({
        _id: comments[index]._id,
        name: user.username,
        content: comments[index].content,
      });
    }



  return {
    props: { article, comments:elements },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/articles`);
//   const articles = await res.json();

//   const idList = articles.map((article) => article._id);

//   const paths = idList.map((id) => {
//     return { params: { id: id } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default singleArticle;
