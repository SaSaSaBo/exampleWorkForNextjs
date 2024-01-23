import React from 'react';
import CategoriesLoading from '@/components/categories/loading.js';
import FeatureMovieLoading from '@/components/featured-movie/loading';
import MoviesSectionLoading from '@/components/movie-section/loading';

function Loading() {
    return (
        <div>
            <FeatureMovieLoading />
            <CategoriesLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
        </div>
    )
}

export default Loading;