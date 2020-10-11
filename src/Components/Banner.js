import React, { useEffect, useState } from 'react';
import axios from 'axios';
import request from '../request';
import "./banner.css";

const Banner = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const res = await axios.get(request.fetchNetflixOriginals);
            // console.log();
            // here we need to get some random movie banner so we use randome module while the valuefir should be in limit
            setMovies(res.data.results[
                Math.floor(Math.random() * res.data.results.length - 1)
            ]);

        }



        fetchData();

    }, [])
    console.log(movies)
// this function is basically use to reduce the wording of Movie overview
    function truncate(str, n){
        return str?.length>n? str.substr(0, n-1) + "...": str;
    }


    return (
        <>
        {/* <h1>Hello Word</h1> */}

        <header className="banner"
        style={
            {
                backgroundSize:'cover', 
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movies.backdrop_path}"
                )`,
                backgroundPosition: 'center center',
            }
        }
        
        
        >

            <div className='banner_contents'>
{/* sometimes the movie name is available in terms of movies title, movies original name */}
                <h1 className="banner_title">{movies?.name || movies?.title || movies?.original_name}</h1>

                <div className="banner_buttons">
                    <button className="banner_button">
Play
                    </button>

                    <button className="banner_button">
List
                    </button>

                

                </div>


    <h3  className="banner_description" >{movies.overview}
    {truncate(movies?.overview, 150)}
    
    </h3>


            </div>
            <div className="bottom_fade" />

        </header>

        </>

    )

}

export default Banner;