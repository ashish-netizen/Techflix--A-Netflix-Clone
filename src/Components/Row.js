import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_Url = "https://image.tmdb.org/t/p/original";


const Row = ({ title, fetchUrl, isLargePoster }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailer] = useState("");
    useEffect(() => {
        async function fetchData() {

            const res = await axios.get(fetchUrl);
            // console.log(res.data.results);
            setMovies(res.data.results)
            return res;

        }
        fetchData();

    }, [fetchUrl]);

    console.log(movies);


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

const handleClick=(movie)=>{
    if(trailerUrl) {
        setTrailer("")
    }
    else{
        movieTrailer(movie?.name || '')
        .then((url)=>{
            const urlParams= new URLSearchParams( new URL(url).search);
            setTrailer(urlParams.get('v'));
        }).catch(error=> console.log(error));
    }
}

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        className={`row_poster ${isLargePoster && "row_posterlarge"}`}
                        onClick={()=>{ handleClick(movie)}}
                        key={movie.id}
                        src={`${base_Url}${isLargePoster? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                )
                )
                }
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
        </div>
    );
};

export default Row;