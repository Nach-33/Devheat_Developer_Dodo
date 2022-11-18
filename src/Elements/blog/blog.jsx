import React from "react";
import Article from "../article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import axios from "axios";
function Blog() {
  //fetch api key = fb493da69e8d427b8128e249e50049b8
  //url1 : https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb493da69e8d427b8128e249e50049b8
  const [news, setNews] = React.useState({
    status: "ok",
    totalResults: "5",
    article: [
      {
        source: { id: null, name: "YouTube" },
        author: null,
        title:
          "Loading...",
        description:
          "Loading",
        url: "https://www.youtube.com/watch?v=ICWGscrrx6E",
        urlToImage: "https://i.ytimg.com/vi/ICWGscrrx6E/maxresdefault.jpg",
        publishedAt: "2022-11-18T18:23:27Z",
        content: null,
      },
      {
        source: { id: null, name: "Investing.com" },
        author: "Reuters",
        title:
          "Loading...",
        description:
          "Loading...",
        url: "https://www.investing.com/news/stock-market-news/futures-rise-after-twoday-selloff-on-wall-street-2947886",
        urlToImage:
          "https://i-invdn-com.investing.com/news/WallStreet_800x533_L_1606839595.jpg",
        publishedAt: "2022-11-18T18:07:00Z",
        content:
          "By Ankika Biswas and Amruta Khandekar\r\n(Reuters) -The S&amp;P 500 and the Nasdaq reversed early gains on Friday, with investors piling into defensive sectors while tech and growth stocks took a hit a… [+2655 chars]",
      },
    ],
  });
  const Render = <div></div>;
  React.useState(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fb493da69e8d427b8128e249e50049b8`
    )
      .then((response) => response.json())
      .then((response) => setNews(response))
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    console.log(news);
  }, [news]);

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
      {/* <Render /> */}
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
              // text={news.article[0].title}
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
