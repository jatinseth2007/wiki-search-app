import React, { useState, useEffect } from 'react';

import './SearchResults.css';
import {Statsbar} from '../Statsbar/Statsbar';
import {SearchResult} from '../SearchResult/SearchResult';


export const SearchResults = ({searchResults, isSearchResultsLoading}) => {
    const [preparedResults, setPreparedResults] = useState([]);

    useEffect(() => {
        const preparedResultsArr = [];
        // checking if the key is there
        if(searchResults?.query?.pages && typeof searchResults.query.pages === 'object'){
            const keys = Object.keys(searchResults.query.pages);

            // if we got results or not...
            if(keys.length > 0){
                for(const key of keys){
                    preparedResultsArr.push(searchResults.query.pages[key]);
                }//EOL
                setPreparedResults(preparedResultsArr);
            }//EOI
        }//EOI
    }, [searchResults]);
    console.log('SearchResults rendered');
    
    return (
        <section className="search-results-container">
            {
                isSearchResultsLoading 
                ?  (<span>loading...</span>)
                : (<> 
                <Statsbar totalResults={preparedResults.length} />
                {
                    (preparedResults.length > 0) &&
                    preparedResults.map((result, index) => {
                        return (
                            <SearchResult key={index} result={result} />
                        )
                    })
                }
                </>)
            }
        </section>
    );
}