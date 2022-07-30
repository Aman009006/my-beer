import React , {useState,useEffect} from 'react'
import axios from 'axios'
import BeerCard from '../../components/beerCard/BeerCard'
import { useRouter } from 'next/router'


function Search (){

  const [beer,setBeer]=useState([])
  const [beerName,setBeerName]=useState('')
  const router = useRouter()
  const { asPath , pathname} = useRouter()

  useEffect(() => {
    const options = {
        url: `https://api.punkapi.com/v2/beers?beer_name=${asPath.split('/')[2]}`,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      
      axios(options)
        .then(response => {
          setBeer(response.data)
        });
  }, [asPath]);
  
  function getSearchBeer(){
    router.push(`/search/${beerName}`)
  }

  return(
    <>
      <nav>
        <div className="nav__content container">
        <h3 onClick={()=>router.push('/')} className="logo">TO MAIN</h3>
          <div className="search__content">
          <input onChange={(e)=>setBeerName(e.target.value)} type="text" className="search__input" />
          <button onClick={()=>getSearchBeer()} className="submit__btn"> <img src="/img/search.png" alt="" /> </button>
          </div>
        </div>
      </nav>
      
      <div className="cards__content container">
        {beer.map((b)=>{
          return(
            <div key={b.id}>
            <BeerCard key={b.id} beer={b}/>
            </div>
          )
        })}
      </div>
   
    </>
  )
}
export default Search