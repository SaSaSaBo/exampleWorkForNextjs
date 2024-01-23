import React from 'react';
import { MovieContainer } from '@/containers/movie';
import Movies from '@/mocks/movies.json'
import { notFound } from "next/navigation";

async function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function MoviePage ({params, searchparams}) {

    const movieDetail = Movies.results.find(
            (movie) => movie.id.toString() === params.id
        );

        if(!movieDetail) {
          notFound();
        }

        if(!searchparams === "true") {
          await delay(2000);
        }


   return <MovieContainer movie={movieDetail} />;

}

export default MoviePage;