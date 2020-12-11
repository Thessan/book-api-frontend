import React, { useState } from 'react';
import styled from 'styled-components'

import { SearchResults } from './SearchResults'

export const Search = () => {
    const [author, setAuthor] = useState(''); // single object (author)
    const [books, setBooks] = useState([]); // array of objects (books)

    const handleSubmit = (event) => {
        event.preventDefault();

    fetch(`https://thessans-book-api.herokuapp.com/books/search?author=${author}`)
        .then((response) => response.json())
        .then((json) => {
        setBooks(json);
        setAuthor(json);
        })
    };

    return (
        <>
        <TextContainer>
            <p>Search books by author</p>
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
                            <SearchButton type="submit" onClick={handleSubmit}>SEARCH</SearchButton>
                        </form>
                    </SearchContainer>

                    <SearchResults books={books}/>
        </>
    )
}

const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const SearchButton = styled.button`
`

