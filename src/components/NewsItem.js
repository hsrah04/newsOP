import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageUrl, url, author, date, source } = props;

  return (
    <div>
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: "0"
        }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={!imageUrl ? "https://cdn.mos.cms.futurecdn.net/zwNfHnfLzP5Da8PahxVABQ.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-primary" >By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}


