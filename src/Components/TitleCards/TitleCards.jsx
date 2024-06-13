import React, {useEffect, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../Assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {
  const[apiData,setApiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTliNTIxMjZjY2IzMDY4OGQ3Zjk5NWM5YzcwMzUxYiIsInN1YiI6IjY2NTIwZGU0YWY0OTJhYjk2ZWM1ZTUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMLIyQGenAGfypUocuIGZQ1lz4pj2XpXU8F5rIOgkjM'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  })

  return (
    <div className='title-cards'> 
      <h4>{title?title:"Popular On Netflix"}</h4>
      <div className='card-list'>
        {apiData.map((card,index)=> {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards

