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
        var articleSlug = []
            data.map((article) => {
                if(slug === article.slug){
                    articleSlug.push(article)
                }
            })
            console.log(articleSlug)

            return (
                <section className="single_article_section">
                    {
                        articleSlug.map((each) => (
                            <div>
                                <h2>{each.title}</h2>
                                <h3>{each.author}</h3>
                                <h3>{each.slug}</h3>
                            </div>
                        ))
                    }
            </section>
        )
    }
}

// function NewArticle(props) {
//     console.log(props)
//     return(
//         <div>
//             {/* {
//                 props.articles.map((each) => (
//                     <h2>{each.title}</h2>
//                 ))
//             } */}
//         </div>
//     )
// }

export default SingleArticle;