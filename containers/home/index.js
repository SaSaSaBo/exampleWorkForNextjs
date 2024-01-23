import { FeaturedMovie } from '@/components/featured-movie';
import React from 'react'
import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';
import Categories from '@/components/categories';


function HomeContainer() {
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0, 5)}/>
    </div>
  )
}

export default HomeContainer;
