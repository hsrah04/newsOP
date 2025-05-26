import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedata = await data.json();
    // console.log(parsedata);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = capitalizeFirstLetter(props.category) + " - NewsOP";
    updateNews();
  }, [])


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h2 className='text-center' style={{ margin: "30px 0px", marginTop: "80px" }}>News OP - Top {capitalizeFirstLetter(props.category)}  Headlines</h2>
      <div className='text-center'>
        {loading && <Spinner />}
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className='text-center'>
          {loading && <Spinner />}
        </div>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
        </div>
      </InfiniteScroll>
    </>
  )

}


News.defaultProps = {
  pageSize: 8,
  country: 'us',
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.number,
}



