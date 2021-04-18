// 50fa7bd782e748ec93279bc04d440c0a
import React, {useEffect, useState} from 'react'

function NewsComp() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=Apple&from=2021-04-18&sortBy=popularity&apiKey=50fa7bd782e748ec93279bc04d440c0a',
    )
      .then(res => res.json())
      .then(final => setNews(final.articles))
  }, [])
  console.log(news)
  return (
    <div style={{display: 'grid', placeContent: 'center'}}>
      {news.map(newSee => (
        <h5 key={newSee.publishedAt}>{newSee.title}</h5>
      ))}
    </div>
  )
}

export default NewsComp
