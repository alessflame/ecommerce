import React from 'react'
import BlogArticleCard from '../BlogArticleCard/BlogArticleCard'
import style from "./ArticlesList.module.css"

function ArticlesList({articles}) {
  return (
    <div className={style.list}>

      {articles.map((article)=>{return <BlogArticleCard key={article._id} {...article}/>})}
     
    </div>
  )
}

export default ArticlesList