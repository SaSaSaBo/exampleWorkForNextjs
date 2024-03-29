import { FeaturedMovie } from '@/components/featured-movie';
import React from 'react'
import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';
import Categories from '@/components/categories';
import MovieSection from '@/components/movie-section';


function HomeContainer({selectedCategory}) {
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0, 5)}/>
        {selectedCategory.movies.length > 0 &&(
        <MovieSection title={Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies}/>)}
        <br/>
        <MovieSection title='Popular Movies' movies={Movies.results.slice(0, 8)}/>
        <br/>
        <MovieSection title='Favorite Movies' movies={Movies.results.slice(8, 14)}/>
    </div>
  )
}

export default HomeContainer;
