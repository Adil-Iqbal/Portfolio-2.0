/* eslint-disable */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../styles/index.css';

const fetch = require('node-fetch');
const blogPostNotFound = '<div class="euler">\n\n#### Blog Post Not Found\n\nMy sincerest apologies; this blog post does not exist.\n\nConsider going back to the [main page](http://www.adil-iqbal.com) and enjoying our other content.\n\n</div>';

fetch('./static/data.json')
  .then(response => response.json())
  .then((data) => {
    const articleFetches = [];
    data.articles.map((articleProps) => {
      const path = `./static/articles/markdown/${articleProps.uuid}.md`;
      articleFetches.push(fetch(path));
    });
    Promise.all(articleFetches)
      .then(allResponses => {
        const articleTexts = [];
        for (let i = 0; i < allResponses.length; i++) {
          if (allResponses[i].ok) {
            articleTexts.push(allResponses[i].text());
          } else {
            articleTexts.push(blogPostNotFound);
          }
        }
        return Promise.all(articleTexts);
      })
      .then(allArticleText => {
        ReactDOM.render(<App 
          projectData={data.projects} 
          articleData={data.articles}
          articleContent={allArticleText}
        />, document.getElementById('app'));
      })
  });









  //     fetch(path)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.text();
  //         }
  //         else {
  //           return blogPostNotFound;
  //         }
  //       })
  //       .then(content => articleProps.markdownSrc = content)
  //     return data;
  //   }).then(allData => {
  //     ReactDOM.render(<App projectData={allData.projects} articleData={allData.articles} />, document.getElementById('app'));
  //   });
    
  // });