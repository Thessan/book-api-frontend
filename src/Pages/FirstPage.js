import React from 'react';
import styled from 'styled-components'

import { NavigationBar } from '../Components/NavigationBar'

export const FirstPage = () => {
    return (
        <>
        <NavigationBar />
        <QuoteContainer>
            <Quote>“That’s the thing about books. They let you travel without moving your feet.”</Quote>
        </QuoteContainer>
            <QuoteAuthorContainer>
                <QuoteAuthor>– Jhumpa Lahiri</QuoteAuthor>
            </QuoteAuthorContainer>
        
        </>
    )
}

const QuoteContainer = styled.div`
text-align: center;
margin: auto;
padding-top: 250px;
`

const Quote = styled.h1`
font-family: 'Goudy Bookletter 1911', serif;
font-size: 35px;
color: white;
margin: auto;
padding: 8px;
`

const QuoteAuthorContainer = styled.div`
font-family: 'Goudy Bookletter 1911', serif;
font-size: 20px;
color: white;
text-align: center;
font-style: italic;
margin: auto;
`

const QuoteAuthor = styled.p`
font-size: 21px;
`