import React from "react";
import Article from "../article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import axios from "axios";
function Blog() {

  return (
    <>
      <div className="blog section__padding px-5" id="blog">
        <div className="blog-heading">
          <h1 className="gradient__text">
            Latest News: <br />
          </h1>
        </div>
        <div className="blog-container">
          <div className="blog-container_groupA">
            <Article
              imgUrl={blog01}
              date="Nov 20, 2022"
            />
          </div>
          <div className="blog-container_groupB">
            <Article
              imgUrl={blog02}
              date="Nov20, 2022"
              text="{news.articles[1].title}"
            />
            <Article
              imgUrl={blog03}
              date="Sep 26, 2021"
              text="{news.articles[2].title}"
            />
            <Article
              imgUrl={blog04}
              date="Sep 26, 2021"
              text="{news.articles[3].title}"
            />
            <Article
              imgUrl={blog05}
              date="Sep 26, 2021"
              text="{news.articles[4].title}"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
