export const settings = {
    limit: 20,
};

export const prepareWikiUrl = (searchText, characters) => {
    try {
        return `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchText}&gsrlimit=${settings.limit}&prop=pageimages|extracts&exchars=${characters}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    } catch (error) {
        throw error;
    }
}