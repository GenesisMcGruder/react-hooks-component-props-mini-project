import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const showArticles = posts.map((post)=> Article(post))
    return (
        <main>
            {showArticles}
        </main>
    )
}






export default ArticleList;