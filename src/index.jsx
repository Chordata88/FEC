import React from 'react';// Bring React in to build a component.
import { lazy, useState, useEffect, createContext } from 'react';
import { createRoot } from "react-dom/client";
const Overview = lazy(() => import("./Components/Overview/Overview.jsx"));
const QuestionsAnswers = lazy(() => import("./Components/QnA/QnA.jsx"));
const RelatedItems = lazy(() => import("./Components/RelatedItems/RelatedItems.jsx"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews.jsx"));

import axios from 'axios';

import ModuleContext from './ModuleContext.js';
import CurrentContext from './CurrentContext.js';

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  const [current, setCurrent] = useState({}); //current product
  const [rating, setRating] = useState(null);

  function getProducts(id) {
    return axios.get(`/products${id === undefined ? '' : '/' + id}`, {
      params: {
        product_id: id
      }
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err);
    })
  };
  function setCurrentById(id) {
    getProducts(id)
        .then(res => setCurrent(res.data))
  };
  useEffect(() => {
    // if(!current.id) {
    //   getProducts('37345')
    //     .then(res => setCurrent(res.data))
    // }
    // if(!current.id) {
    //   getProducts('37345')
    //     .then(res => setCurrent(res.data))
    // }
    if(!current.id) {
      getProducts('37311')
        .then(res => setCurrent(res.data))
    }
  }, []);

  function scrollTo(selector) {
    var div = document.getElementsByClassName(selector);
    div[0].scrollIntoView();
  }
  useEffect(() => {
    scrollTo('overviewContainer')
  }, [current]);

  return (
    <>
      <CurrentContext.Provider value={current.id}>
        <ModuleContext.Provider value='overview'>
          <h1>Hello World</h1>
          <Overview current={current}/>
        </ModuleContext.Provider>
        <ModuleContext.Provider value='questions-answers'>
          <QuestionsAnswers current={current} />
        </ModuleContext.Provider>
        <ModuleContext.Provider value='related-items'>
          <RelatedItems current={current} setCurrentById={setCurrentById} getProducts={getProducts}/>
        </ModuleContext.Provider>
        <ModuleContext.Provider value='reviews'>
          <Reviews current={current.id}/>
        </ModuleContext.Provider>
      </CurrentContext.Provider>
    </>
  )
}

root.render(<App />);