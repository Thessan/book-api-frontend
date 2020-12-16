import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { NavigationBar } from '../Components/NavigationBar'
import '../each-book.css'

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
            <TopRatedText>These are the current 10 top rated books that has recieved a rating over 4.</TopRatedText>
                <TopTenContainer>    
                    {topTen.map((book) => (
                        <div key={book.bookID}>
                        <EachBook>
                            <Link className="each-book"
                            to={`/books/top-ten/${book.bookID}`}>
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
    background-color: rgba(255, 255, 255, 0.685);
    font-size: 25px;
    width: 100%;
    height: 33px;
    margin-top: 378px;
    padding: 3px 0 3px 0;
`

const TopRatedText = styled.p`
    font-family: 'Goudy Bookletter 1911', serif;
    font-size: 18px;
    color: white;
    font-style: italic;
    text-align: center;
    margin-bottom: 0;
    padding-top: 8px;
`

const TopTenContainer = styled.div`
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
    width: 300px;
    min-height: 150px;
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