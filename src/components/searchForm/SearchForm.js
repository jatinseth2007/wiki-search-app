import React, { useState, useCallback } from 'react';
import {FaSistrix} from 'react-icons/fa';

import './SearchForm.css';
import {prepareWikiUrl} from '../../config';


export const SearchForm = ({setSearchResultsHandler, setSearchResultsLoadingHandler}) => {
    const [searchText, setSearchText] = useState('');

    const fetchSearchResultsHandler = useCallback(() => {
        //definations
        const fetchSearchResults = async () => {
            try {
                //loading ON
                setSearchResultsLoadingHandler(true);

                // call the wikipedia API and fetch results
                const wikiUrl = prepareWikiUrl(searchText, 100);
                // call the API
                const rawResults = await fetch(wikiUrl);
                const results = await rawResults.json();
                // caling the parent function
                setSearchResultsHandler(results);

                //loading OFFF
                setSearchResultsLoadingHandler(false);
            } catch (error) {
                //loading OFFF
                setSearchResultsLoadingHandler(false);
                console.log(error);
            }
        }//EOF

        // call the function to fetch results
        fetchSearchResults();
    }, [searchText, setSearchResultsHandler, setSearchResultsLoadingHandler]);

    console.log('SearchForm rendered');

    return (
        <section className="search-bar-container">
            <form className="form" onSubmit={(e) => { e.preventDefault(); fetchSearchResultsHandler(); }}>
                <input type="text" autoComplete="off" className="search-bar" value={searchText} onChange={(e) => { setSearchText(e.target.value); }
            } />
                <button type="submit" className="search-button">
                    <i className="blue pointer"><FaSistrix /></i>
                </button>
            </form>
        </section>
    );
}