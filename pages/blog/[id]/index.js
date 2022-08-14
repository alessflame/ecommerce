import React from "react";
import BlogArticle from "../../../components/BlogArticle/BlogArticle";
import { useRouter } from "next/router";
import CommentsList from "../../../components/CommentsList/CommentsList";

function singleArticle({ article, comments }) {
  return (
    <div>
      <BlogArticle {...article} comments={comments} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/articles/${context.params.id}`
  );
  const resComment = await fetch(
    `${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/comments/${context.params.id}`
  );
  const article = await res.json();
  const comments = await resComment.json();

  return {
    props: { article, comments },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/articles`);
  const articles = await res.json();

  const idList = articles.map((article) => article._id);

  const paths = idList.map((id) => {
    return { params: { id: id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default singleArticle;
