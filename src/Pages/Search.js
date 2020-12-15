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
        <SearchResults books={books}/> {/* TO ADD: want the search results to open and be displayed on a new page */}
        </>
    }


    return (
        <>
            <SearchContainer>
                <form>
                    <label htmlFor="searchByAuthor">
                        <Input
                        id="searchByAuthor"
                        type="text"
                        placeholder="Find book by author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)} />
                    </label>
                        <SearchButton type="submit" 
                        onClick={(event) => handleSubmit()}>
                        SEARCH
                        </SearchButton>
                </form>
            </SearchContainer>
        </>
    )
}

const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
background-color: white;
width: 250px;
margin: auto;
margin-top: 30px;
`

const Input = styled.input`
background-color: white;
font-family: 'Josefin Sans', sans-serif;
font-size: 12px;
font-style: italic;
width: 160px;
height: 15px;
margin-right: 5px;
padding: 3px 0 0 2px;
border: none;

@media (min-width: 1024px) {
    font-size: 14px;
}
`

const SearchButton = styled.button`
background-color: white;
font-family: 'Goudy Bookletter 1911', serif;
color: teal;
font-weight: bold;
border: none;
cursor: pointer;
`

