import React from 'react';

import './SearchResults.css';
import { Statsbar } from '../Statsbar/Statsbar';
import { SearchResult } from '../SearchResult/SearchResult';
import { useStateValue } from '../../dataLayer/StateProvider';


export const SearchResults = () => {
    const [{ searchResults, isSearchResultsLoading }] = useStateValue();
    console.log('SearchResults rendered');

    return (
        <section className="search-results-container">
            {
                isSearchResultsLoading
                    ? (<span>loading...</span>)
                    : (<>
                        <Statsbar totalResults={searchResults.length} />
                        {
                            (searchResults.length > 0) &&
                            searchResults.map((result, index) => {
                                return (
                                    <SearchResult key={index} result={result} />
                                )
                            })
                        }
                    </>)
            }
        </section>
    );
};