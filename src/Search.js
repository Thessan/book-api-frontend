import React, { useState } from 'react';
import styled from 'styled-components'

import { SearchResults } from './SearchResults'


export const Search = () => {
    const [author, setAuthor] = useState(''); // single object (author)
    const [books, setBooks] = useState([]); // array of objects (books)
    const [searchResultsShowing, setSearchResultsShowing] = useState(false)

    const handleSubmit = (event) => {
        setSearchResultsShowing(true)
        

    fetch(`https://thessans-book-api.herokuapp.com/books/search?author=${author}`)
        .then((response) => response.json())
        .then((json) => {
        setBooks(json);
        setAuthor(json);
        })
    };

    if (searchResultsShowing === true) {
        return <>
        <Search />
        <SearchResults books={books}/> {/* want the search results to open and be displayed on a new page */}
        </>
    }


    return (
        <>
        <TextContainer>
            <Text>Search books by author</Text>
                </TextContainer>
                    <SearchContainer>
                        <form>
                        <label htmlFor="searchByAuthor">
                            <input
                            id="searchByAuthor"
                            type="text"
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)} />
                        </label>
                            <SearchButton type="submit" 
                            onClick={(event) => handleSubmit()}>
                                SEARCH</SearchButton>
                        </form>
                    </SearchContainer>
        </>
    )

}

const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Text = styled.p`
font-size: 20px;
color: white;
`

const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const SearchButton = styled.button`
`

