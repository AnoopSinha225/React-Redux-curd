import React, { useState, useEffect } from 'react'

//using hooks
const News = () => {
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('react')
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')
  const [loading, setLoading] = useState(false)

  const fetchNews = () => {
    setLoading(true)
    fetch(url)
      .then(result => result.json())
      .then(data => {
        console.log("News URL data", data)
        setNews(data.hits)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchNews()
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  const showLoading = () => (
    loading ? <h2 style={{ width: '200px', margin: '10px auto', color: '#4B286D' }}>Loading...</h2> : ''
  )

  const searchForm = () => (
    <form style={{ width: '50%' }} onSubmit={handleSubmit}>
      <input type='text' value={searchQuery} onChange={handleChange}></input>
      <button style={{ width: '200px', margin: '10px auto' }}>Search</button>
    </form>
)

  const showNews = () => (
    news.map((item, i) => (
      <p>{item.title}</p>
    ))
  )
  return (
    <div style={{ textAlign: 'left', margin: '20px' }}>
      <h2>News</h2>
      {searchForm()}
      {showLoading()}
      {showNews()}
    </div>
  )
}

export default News