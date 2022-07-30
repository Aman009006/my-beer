import React , {useState} from 'react'
import BeerCard from '../components/beerCard/BeerCard'
import axios from 'axios'


function Main (){

  const [beer,setBeer]=useState([])
  const [beerName,setBeerName]=useState([])

  function getSearchBeer(){
    const options = {
      url: `https://api.punkapi.com/v2/beers?beer_name=${beerName}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    
    axios(options)
      .then(response => {
        console.log(response);
        setBeer(response.data)
      });
  }



  return(
    <>
      <nav>
        <div className="nav__content container">
          <div className="search__content">
          <input onChange={(e)=>setBeerName(e.target.value)} type="text" className="search__input" />
          <button onClick={()=>getSearchBeer()} className="submit__btn"> <img src="/img/search.png" alt="" /> </button>
          </div>
        </div>
      </nav>
      <div className="cards__content container">
        {beer.map((b)=>{
          return(
            <>
            <BeerCard beer={b}/>
            </>
          )
        })}
      </div>
    </>
  )
}
export default Main