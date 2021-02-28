import './SearchResult.css';


export const SearchResult = ({result}) => {
    return (
        <div className="search-results-item" key={result.pageid}>
            <div className="search-results-title">
                <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noreferrer">{result.title}</a>
            </div>
            <div className="search-results-content">
                {
                    (result?.thumbnail?.source) &&
                        (
                            <div className="search-results-image">
                                <img src={result.thumbnail.source} alt={result.title} />
                            </div>
                        )
                }
                <div className="search-results-text">
                    {result.extract}
                </div>
            </div>
        </div>
    );
}