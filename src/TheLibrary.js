import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
        <Header>The Library 📚</Header>
            <AllBooksContainer> 
                {books.map((book) => 
                    <EachBook>
                        <Icon>📖 </Icon>
                            <BookTitle>{book.title}</BookTitle>
                                <Author>{book.authors}</Author>
                    </EachBook>
                )}
            </AllBooksContainer>
    </>
)
}

const Header = styled.h1`
color: white;
text-align: center;
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
border: solid 5px teal;
`

const BookTitle = styled.p`
font-weight: bold;
`

const Author = styled.p`
font-style: italic;
`

const Icon = styled.div`
padding: 5px 0 5px 0;
`