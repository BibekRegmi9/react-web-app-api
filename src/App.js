import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d30b047433524b4d9c37994e0565f354"
      )
      .then((res) => {
        // console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          {news.map((val) => {
            return (
              <div className="col mu-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">
                     {val.description}
                    </p>
                    {/* <button className="btn btn-primary">
                      {val.url}
                    </button> */}
                    <a className="btn btn-success" href={val.url} role="button">Read More</a>


                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
