import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import '../header.css'
import { NavigationBar } from '../Components/NavigationBar'

export const EachBookLibrary = () => {
    const { bookID } = useParams()
    const [eachBook, setEachBook] = useState({}) // curly brackets since we're getting an object from the fetch

    useEffect(() => {
        fetch(`https://thessans-book-api.herokuapp.com/books/book/${bookID}`)
        .then((response) => response.json())
        .then((json) => {
            setEachBook(json);
        })
}, [bookID]);

    return (
        <>
        <NavigationBar />
        <div className="header">
            <HeaderText>BOOK DETAILS</HeaderText>
        </div>
            <EachBookContainer>
                <Title>{eachBook.title}</Title>
                    <Text>Number of pages:</Text> <Details>{eachBook.num_pages}</Details>
                        <Text>Written by:</Text> <Details>{eachBook.authors}</Details>
                            <Text>Average rating:</Text> <Details>{eachBook.average_rating}</Details>
                                <Text>ISBN:</Text> <Details>{eachBook.isbn}</Details>
                                    <Link to="/books">
                                        <span className="icon" role="img" aria-label="button back to The Library">⬅️ </span>
                                    </Link> 
            </EachBookContainer>
        </>
    )
}


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

const EachBookContainer = styled.div`
background-color: white;
text-align: center;
width: auto;
height: auto;
margin: 30px;
padding: 30px;
border: solid 8px rgb(230, 216, 216);
`

const Title = styled.p`
color: teal;
font-size: 22px;
font-weight: bold;
text-decoration: underline;
`

const Text = styled.p`
color: teal;
font-size: 18px;
font-weight:bold;
margin-bottom: 0;
`

const Details = styled.p`
font-size: 18px;
text-align: center;
font-style: italic;
margin-top: 4px;
`