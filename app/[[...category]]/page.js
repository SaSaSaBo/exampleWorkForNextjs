import React from 'react';
import HomeContainer from '@/containers/home';
import Movies from '@/mocks/movies.json';
function HomePage({params}) {

    let selectedCategory;

    if(params.category?.length > 0) {
        selectedCategory = true;
    }
  return (
   <HomeContainer selectedCategory={{
            id: params.category?.[0] ?? "",
            movies: selectedCategory ? Movies.results.slice(0, 8): [],
        }}/>
  );
}

export default HomePage;
