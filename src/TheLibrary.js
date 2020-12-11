import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './header.css'

export const TheLibrary = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://thessans-book-api.herokuapp.com/books')
        .then((response) => response.json())
        .then((json) => {
            setBooks(json);
        })
}, []);

    return (
        <>
        <div className="header">
        <HeaderText>The Library</HeaderText>
        </div>
            <AllBooksContainer> 
                {books.map((book) => 
                    <EachBook>
                        <Link to={`/books/${book.bookID}`}>
                        {/* <Icon>📖 </Icon> */}
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
color: white;
text-align: center;
padding-top: 20px;
`

const AllBooksContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: lightseagreen;
width: auto;
height: auto;
text-align: center;
margin: 30px;
padding: 20px;
`

const EachBook = styled.div`
background: white;
margin: 10px;
padding: 3px;
width: 280px;
height: auto;
border: solid 12px teal;
`

const BookTitles = styled.p`
font-weight: bold;
`

const Authors = styled.p`
font-style: italic;
`

/* const Icon = styled.div`
padding: 5px 0 5px 0;
` */