import React from "react";
import {Link} from "react-router-dom";

let data = [
    {
      "title": "How to handle state in React. The missing FAQ.",
      "author": "Osmel Mora",
      "slug": "handle-state-in-react"
    },
    {
      "title": "You might not need React Router",
      "author": "Konstantin Tarkus",
      "slug": "no-need-to-use-react-router"
    },
    {
      "title": "Mixins Considered Harmful",
      "author": "Dan Abramov",
      "slug": "mixins-considered-harmful"
    },
    {
      "title": "React Design Principles",
      "author": "Dan Abramov",
      "slug": "react-design-principles"
    },
    {
      "title": "Don't use .bind() when passing props",
      "author": "Dave Ceddia",
      "slug": "don-use-bind-when-passing-props"
    }
  ]


class Articles extends React.Component {
    render() {
        return (
            <>
             <section className="articles_section">
                 <h2 className="articles_heading">List Of Articles</h2>
                 {
                     data.map((article) => (
                       <div>
                            <Link className="title" to={`/article/${article.slug}`} >{article.title}</Link>
                            <h2 className="author">Author : {article.author}</h2>
                       </div>
                    ))
                 }
             </section>
            </>
         )
    }
}

export default Articles;