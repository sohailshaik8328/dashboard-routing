import React from "react";
import "../stylesheets/App.css"

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

class SingleArticle extends React.Component {
    constructor(props) {
        super(props);
    }

   
    render() {
        let slug = this.props.match.params.slug;
        let article = data.map(article => article)
        return (
            <section className="single_article_section">
            {
                slug === article.slug ? < NewArticle article={article} /> : ""
            }
        </section>
    )
   }
}

function NewArticle(props) {
    return(
        <div>
            <h1>{props.article.title}</h1>
        </div>
    )
}

export default SingleArticle;