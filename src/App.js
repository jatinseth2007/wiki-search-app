import React from 'react';

import './App.css';
import { Logo } from './components/logo/Logo';
import { Footer } from './components/footer/Footer';
import { SearchForm } from './components/searchForm/SearchForm';
import { SearchResults as SearchResultsComp } from './components/SearchResults/SearchResults';

function App() {

    return (
        <main>
            <Logo />
            <SearchForm />
            <SearchResultsComp />
            <Footer />
        </main>
    );
}

export default App;
