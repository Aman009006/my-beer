import React from 'react'
import { useRouter } from 'next/router'

function BeerCard({beer}){
  const router = useRouter()
  return(
    <>
    <div onClick={()=>router.push(`/beer/${beer.id}`)} className="beer__card">
      <img src={beer.image_url} alt="beer" className="beer__img" />
      <div className="beer__text">
      <h3 className="beer__title_card">{beer.name}</h3>
      <p className="beer__descr_card">{beer.description.substring(0,150)}...</p>
      </div>
    </div>
    </>
  )
}
export default BeerCard