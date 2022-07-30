import React from 'react'

function BeerCard({beer}){
console.log(beer);
  return(
    <>
    <div className="beer__card">
      <img src="" alt="" className="beer__img" />
      <h3 className="beer__title"></h3>
      <p className="descr"></p>
    </div>
    </>
  )
}
export default BeerCard