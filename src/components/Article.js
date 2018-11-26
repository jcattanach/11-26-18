import React, { Component } from 'react';
import './Article.css'

class Article extends Component {

    render() {
      return (
        <div className="article">
         <h2>Article</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Eget dolor morbi non arcu. Elementum pulvinar etiam non quam lacus. Non nisi est sit amet facilisis. Lectus quam id leo in vitae turpis. Proin fermentum leo vel orci porta non pulvinar.</p>
         <label className="orangeBanner">12 comments 124 likes</label>
        </div>
      )
    }
}

export default Article
