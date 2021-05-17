import React, { useCallback } from 'react';
import { FaSistrix } from 'react-icons/fa';

import './SearchForm.css';
import { prepareWikiUrl } from '../../config';
import { useStateValue } from '../../dataLayer/StateProvider';


export const SearchForm = () => {
    const [{ searchText }, dispatch] = useStateValue();

    /**
     * Function to set the search text in input variable
     * Jatin Seth
     */
    const setSearchText = (text) => {
        // dispatch the item into the data layer
        dispatch({
            type: "SEARCH_SET_SEARCH_TEXT",
            payload: {
                value: text,
            }
        });
    };

    /**
     * Function to convert the WIKI reaults to array in required format
     * Jatin Seth
     */
    const prepareWikiResultArr = (searchResults) => {
        try {
            const preparedResultsArr = [];
            // checking if the key is there
            if (searchResults?.query?.pages && typeof searchResults.query.pages === 'object') {
                const keys = Object.keys(searchResults.query.pages);

                // if we got results or not...
                if (keys.length > 0) {
                    for (const key of keys) {
                        preparedResultsArr.push(searchResults.query.pages[key]);
                    }//EOL
                }//EOI
            }//EOI
            return preparedResultsArr;
        } catch (error) {
            throw error;
        }
    }

    const fetchSearchResultsHandler = useCallback(() => {
        //definations
        const fetchSearchResults = async () => {
            try {
                //loading ON
                dispatch({
                    type: "SEARCH_SET_SEARCH_LOADING",
                    payload: {
                        value: true,
                    }
                });

                // call the wikipedia API and fetch results
                const wikiUrl = prepareWikiUrl(searchText, 100);
                // call the API
                const rawResults = await fetch(wikiUrl);
                const results = await rawResults.json();
                // caling the parent function
                dispatch({
                    type: "SEARCH_SET_SEARCH_DATA",
                    payload: {
                        value: prepareWikiResultArr(results),
                    }
                });

                //loading OFFF
                dispatch({
                    type: "SEARCH_SET_SEARCH_LOADING",
                    payload: {
                        value: false,
                    }
                });
            } catch (error) {
                //loading OFFF
                dispatch({
                    type: "SEARCH_SET_SEARCH_LOADING",
                    payload: {
                        value: false,
                    }
                });
                console.log(error);
            }
        }//EOF

        // call the function to fetch results
        fetchSearchResults();
    }, [searchText, dispatch]);

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