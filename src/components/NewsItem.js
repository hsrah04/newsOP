import React from 'react'
import newsImage from './assests/news.jpg'

export default function NewsItem(props) {
  let { title, description, imageUrl, url, author, date, source } = props;

  return (
    <div>
      <div className="card my-1">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: "0"
        }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={imageUrl ? imageUrl : newsImage} style={{height:"270px", maxWidth:"100%"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,69)}...</h5>
          <p className="card-text">{description?description.slice(0,91):("Get the full story on Event. We're tracking every angle of this important news, providing you with the essential facts and expert insights. Join the conversation and stay informed.").slice(0,91)}...</p>
          <p className="card-text"><small className="text-primary" >By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}


