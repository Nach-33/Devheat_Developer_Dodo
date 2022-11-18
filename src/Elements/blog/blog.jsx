import React from "react";
import Article from "../article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import axios from 'axios'
function Blog() {
  //fetch api key = fb493da69e8d427b8128e249e50049b8
  //url1 : https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb493da69e8d427b8128e249e50049b8
  // const [news,setNews] = React.useState('hi');
  // React.useState(()=>{
  //     fetch(
  //     `https://eodhistoricaldata.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=10`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setNews(response))
  //     .catch((err) => console.error(err));
  // }, [])
  
  
  // React.useState(()=>{
    //   console.log('news', news);
    // },[news]);
    
    
    
    // async function handleClick(e) {
    //   const response = await fetch(
    //     `https://eodhistoricaldata.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=10`
    //     )
    //     .then((response) => response.json())
    //     .then((response) => setNews(response))
    //     .catch((err) => console.error(err));
    //   }
  return (
    <>
      <div className="blog section__padding px-5" id="blog">
        <div className="blog-heading">
          <h1 className="gradient__text">
            News: <br />
          </h1>
        </div>
        <div className="blog-container">
          <div className="blog-container_groupA">
            <Article
              imgUrl={blog01}
              date="Nov 20, 2022"
              text="NSE amends rules for deletion of merged entities from indices"
            />
          </div>
          <div className="blog-container_groupB">
            <Article
              imgUrl={blog02}
              date="Nov20, 2022"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog03}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog04}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog05}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
