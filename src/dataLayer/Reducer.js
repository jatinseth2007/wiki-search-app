export const initialState = {
    searchText: '',
    searchResults: [],
    isSearchResultsLoading: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_SET_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.payload.value
            };
        case 'SEARCH_SET_SEARCH_LOADING':
            return {
                ...state,
                isSearchResultsLoading: action.payload.value
            }
        case 'SEARCH_SET_SEARCH_DATA':
            return {
                ...state,
                searchResults: action.payload.value
            }
        default:
            return state;
    }
};