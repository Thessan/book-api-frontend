import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import '../header.css'
import '../each-book.css'
import { NavigationBar } from '../Components/NavigationBar'
import { Search } from './Search'

export const TheLibrary = () => {
    const [books, setBooks] = useState([]); // square brackets since it's an array we're getting from the fetch

    useEffect(() => {
        fetch('https://thessans-book-api.herokuapp.com/books')
        .then((response) => response.json())
        .then((json) => {
            setBooks(json);
        })
}, []);

    return (
        <>
        <NavigationBar />
            <div className="header">
                <HeaderText>THE LIBRARY</HeaderText>
            </div>
                <Search />
                    <AllBooksContainer> 
                        {books.map((book) => 
                            <EachBook key={book.bookID}>
                                <Link className="each-book"
                                to={`/books/book/${book.bookID}`}>
                                    <IconContainer>
                                        <span role="img" aria-label="book icon">📖</span>
                                    </IconContainer>
                                        <BookTitles>{book.title}</BookTitles>
                                            <Authors>{book.authors}</Authors>
                                </Link>
                            </EachBook>
                        )}
                    </AllBooksContainer>
    </>
)
}

const HeaderText = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.685);
    font-size: 25px;
    width: 100%;
    height: 33px;
    margin-top: 378px;
    padding: 3px 0 3px 0;
`

const AllBooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: auto;
    height: auto;
    padding: 20px;
`

const EachBook = styled.div`
    background-color: white;
    width: 280px;
    height: auto;
    margin: 20px;
    padding: 3px;
    border: solid 8px rgb(230, 216, 216);
`

const BookTitles = styled.p`
    font-weight: bold;
`

const Authors = styled.p`
    font-style: italic;
`

const IconContainer = styled.div`
    padding: 5px 0 5px 0;
`