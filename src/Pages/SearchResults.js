import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const SearchResults = ({ books }) => {
    return (
        <ResultsContainer>
            {books.map((book) => (
                <EachResult>
                    <Link to={`/books/book/${book.bookID}`}>
                        <IconContainer>
                                <span role="img" aria-label="book icon">📖</span>
                            </IconContainer>
                                <BookTitles>{book.title}</BookTitles>
                                    <Authors>{book.authors}</Authors>
                    </Link>
                </EachResult>
    ))}
        </ResultsContainer>
);
};

const ResultsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: auto;
height: auto;
text-align: center;
padding: 20px;
`

const EachResult = styled.div`
background-color: rgb(230, 216, 216);
margin: 20px;
padding: 3px;
width: 280px;
height: auto;
border: solid 8px white;
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