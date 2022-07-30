import React , {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

function BeerPage(){
  
  const { asPath , pathname} = useRouter()
  const [beerCard,setBeerCard]=useState({})

  useEffect(() => {
    const options = {
      url: `https://api.punkapi.com/v2/beers/${asPath.replace(/[^0-9]/g,'')}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    
    axios(options)
      .then(response => {
      setBeerCard(response.data[0])
      console.log(response.data[0]);

      });
  }, [asPath]);

  return(
   <div className="container mybeer__content">
      <img src={beerCard.image_url} alt="" className="mybeer__img" />
      <div className="mybeer__text">
        <h2 className="mybeer__title">{beerCard.name}</h2>
        <p className="mybeer__descr">{beerCard.tagline}</p>
        <p className="mybeer__descr">{beerCard.description}</p>
        <p className="mybeer__descr">{beerCard.abv}</p>
        <p className="mybeer__descr">{beerCard.food_pairing}</p>
      </div>
   </div>
  )
}
export default BeerPage