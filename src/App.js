import React, { useState } from 'react';

import './App.css';
import {Logo} from './components/logo/Logo';
import {Footer} from './components/footer/Footer';
import { SearchForm } from './components/searchForm/SearchForm';
import {SearchResults as SearchResultsComp} from './components/SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [isSearchResultsLoading, setSearchResultsLoading] = useState(false);

  return (
    <main>
      <Logo />
      <SearchForm setSearchResultsHandler={setSearchResults} setSearchResultsLoadingHandler={setSearchResultsLoading} />
      <SearchResultsComp searchResults={searchResults} isSearchResultsLoading={isSearchResultsLoading} />
      <Footer />
    </main>
  );
}

export default App;
