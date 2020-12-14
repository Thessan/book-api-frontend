import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { NavigationBar } from '../Components/NavigationBar'

export const TopRatedBooks = () => {
    const [topTen, setTopTen] = useState([]) // square brackets since it's an array we're getting from the fetch

    fetch(`https://thessans-book-api.herokuapp.com/books/top-ten`)
        .then((response) => response.json())
        .then((json) => {
        setTopTen(json);
        })
    

    return (
        <>
        <NavigationBar />
            <div className="header">
                <HeaderText>TOP RATED BOOKS</HeaderText>
            </div>
            <TopRatedText>Theses are the 10 top rated books right now with a rating over 4.</TopRatedText>
                <TopTenContainer>    
                    {topTen.map((book) => (
                        <div>
                        <EachBook>
                            <Link to={`/books/top-ten/${book.bookID}`}>
                                <IconContainer>
                                    <span role="img" aria-label="book icon">📖</span>
                                </IconContainer>
                                    <BookTitles>{book.title}</BookTitles>
                                        <Authors>{book.authors}</Authors>
                            </Link>
                        </EachBook>
                </div>
    ))}
                </TopTenContainer>
        </>
    
    )
};

const HeaderText = styled.h1`
display: flex;
align-items: center;
justify-content: center;
margin-top: 378px;
padding-top: 4px;
width: 100%;
height: 40px;
background-color: rgba(255, 255, 255, 0.685);
`

const TopRatedText = styled.p`
font-size: 20px;
color: white;
text-align: center;
margin-bottom: 0;
padding-top: 8px;
`

const TopTenContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: auto;
height: auto;
text-align: center;
padding: 20px;
`

const EachBook = styled.div`
background-color: white;
margin: 20px;
padding: 3px;
width: 300px;
height: 180px;
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