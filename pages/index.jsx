import React , {useState,useEffect} from 'react'
import BeerCard from '../components/beerCard/BeerCard'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { config } from '../config';

function Main (){

  const router = useRouter()


  const [beer,setBeer]=useState([])
  const [beerName,setBeerName]=useState('')
  const [beerPage,setBeerPage]=useState(1)

  
  function getSearchBeer(){
    router.push(`/search/${beerName}`)
  }

  useEffect(() => {
    const options = {
      url: `${config.mainUrl}beers?page=${beerPage}`,
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
      window.scrollTo(0, 0);
  }, [beerPage]);

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
            <div key={b.id}>
            <BeerCard key={b.id} beer={b}/>
            </div>
          )
        })}
      </div>
    <div className="pagination__content">
    <ReactPaginate 
      previousLabel={'prev'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={13}
      onPageChange={(e)=>setBeerPage(e.selected + 1)}
      marginPages Displayed={3}
      containerClassName={'pagination'}
      pageClassName={' page-item'}
      pageLinkClassName={' page-link'}
      previousClassName={' page-item'}
      previousLinkClassName ={'page-link'}
      nextClassName = {'page-item'}
      nextLinkClassName ={'page-link'}
      breakClassName={ 'page-item'}
      breakLinkClassName={' page-link'}
      />
    </div>
    </>
  )
}
export default Main