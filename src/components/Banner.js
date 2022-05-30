import React from 'react'
import {useNavigate} from "react-router-dom"

import "./css/Banner.css"
import Search from './Search';

function Banner() {
const navigate = useNavigate();
const [search, setSearch] = React.useState(false);


  return (
    <div className='banner'>
        <div className='banner_search'>
            {search && <Search />}
            <button onClick = {() => setSearch(!search)} 
            className='banner_searchButton' 
            variant="outlined">{search ? "Hide" : "I am flexible"}</button>
        
            </div>

       <div className='banner_info'>
         <div className='banner_info_text'>
           <h1>Get out and stretch your imagination</h1>
           <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
           
           <button onClick={()=>navigate("/list")} className='banner_info_button' variant ='outline'>Explore Nearby </button>
           
           </div>
        </div> 
    </div>
  )
}

export default Banner