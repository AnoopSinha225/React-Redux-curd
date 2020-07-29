import React, { useState, useEffect } from 'react'

//using hooks

const News = () => {
    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState('react')

    const fetchNews = () => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
            .then(result => result.json())
            .then(data =>{
                console.log(data)
                setNews(data.hits)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchNews()
    });

    const handleChange=(e)=>{
        setSearchQuery(e.target.value)
    }

    return (
        <div style={{textAlign:'left', margin: '20px'}}>
            <h2>News</h2>
            <form style={{width:'50%'}}>
                <input type='text' value={searchQuery} onChange={handleChange}></input>
                <button style={{width:'200px',  margin: '10px auto'}}>Search</button>
            </form>
            {news.map((item,i)=>(
            <p>{item.title}</p>
            ))}
        </div>
    )
}

export default News