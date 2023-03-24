import styled from "styled-components";

export const ImgWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    & img {
        @media screen and (min-width: 320px) {
            width: 320px;
         }
         @media screen and (min-width: 768px) {
            width: 255px;
            nth-
         }
    }

    & img:nth-child(1){
        @media screen and (min-width: 768px) {
            display:none;
         }
         @media screen and (min-width: 1280px) {
            display: block;
         }
    }
    & img:nth-child(2){
        @media screen and (min-width: 768px) {
            display:none;
         }
         @media screen and (min-width: 1280px) {
            display: block;
         }
    }
    
`

export const ReviewsPlug = () => {
    const imgUrl = 'https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g';
    
    return (
        <ImgWrapper>
            <img src={imgUrl} alt='waiting for reviews'/>
            <img src={imgUrl} alt='waiting for reviews'/>
            <img src={imgUrl} alt='waiting for reviews'/>
            <img src={imgUrl} alt='waiting for reviews'/>
            <img src={imgUrl} alt='waiting for reviews'/>
        </ImgWrapper>
    )
}

export const MovieSearchPlug = ()=> {
    return (
        <img style={{height: '550px'}}src='https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif' alt='waiting cat'/>
    )
}

