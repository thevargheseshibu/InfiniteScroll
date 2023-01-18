import "./App.css";

import React from "react";

import { useState, useEffect } from "react";
import { Example } from "./API/API";

function App() {
  const data = [];
  //const pData = Example("https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1",(data)=>{setColor(data)});
  const [color, setColor] = useState([]);
  const [link, setLink] = useState([
    "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1",
    "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/2",
    "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/3",
  ]);
  const [currPage, setCurPage] = useState(0);

  useEffect(() => {
    Example(
      "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1",
      color,
      (data) => {
        setColor(data);
      }
    );
  }, []);

  return (
    <div className="container-fluid Appe">
      <div className="row align-items-center bg-light py-3 px-xl-5  d-lg-flex">
        {color &&
          color.map((item) => {
            return (
              <div classNameName="App" style={{ paddingTop: "50px" }}>
                <div className="row main Appe">
                  <div className="column main Appe">
                    <div className="card Appe">
                      <img
                        src={item.node.field_photo_image_section}
                        alt="Avatar"
                        style={{ width: "100%" }}
                        className="Appe"
                      />
                      <h3 className="Appe"> Name : {item.node.author_name}</h3>
                      <p className="Appe">{item.node.title}</p>
                      <p className="Appe">
                        Views :{" "}
                        {item.node.views_count +
                          Math.round(Math.random() * (500 - 100) + 70)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div
        onMouseEnter={() => {
          if (currPage < link.length - 1) {
            setCurPage(currPage + 1);
            Example(link[currPage + 1], color, (data) => {
              setColor(data);
            });
          }
        }}
        className="pagination Appe"
        onS
      >
        <a className="Appe" href="#">
          &laquo;
        </a>
        <a
          className="Appe"
          href="#"
          class={currPage === 0 ? "active main1" : "main1"}
        >
          1
        </a>
        <a
          className="Appe"
          href="#"
          class={currPage === 1 ? "active main1" : "main1"}
        >
          2
        </a>
        <a
          className="Appe"
          href="#"
          class={currPage === 2 ? "active main1" : "main1"}
        >
          3
        </a>
        <a className="Appe" href="#">
          &raquo;
        </a>
      </div>
    </div>
  );
}

export default App;
