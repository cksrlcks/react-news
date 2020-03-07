import React, { useState, useEffect } from 'react';
import usePromise from '../lib/usePromise'
import axios from 'axios'
import styled from 'styled-components';
import NewsItem from './NewsItem';


const NewsListBlock = styled.div`
    padding:2rem 0;
    max-width:960px;
    margin:0 auto;
`;

const LoadingBlock = styled.div`
    font-size:1.2rem;
    padding:2rem 0;
    text-align:center;
`;
const NewsList = ({ category }) => {
    const [loading, data, error] = usePromise(() => {
        const pageCategory = `&category=${category}` || null
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${pageCategory}&apiKey=1e207782825c4d039d4fa86604c57790`)
    }, [category])

    if (loading) {
        return <LoadingBlock>불러오는 중입니다...</LoadingBlock>;
    }
    if (!data) {
        return null;
    }
    if (error) {
        return <LoadingBlock>오류가 발생했습니다.</LoadingBlock>;
    }

    const { articles } = data.data

    return (
        <NewsListBlock>
            {data.data.articles.map(article => <NewsItem article={article} key={article.url} />)}
        </NewsListBlock>
    );
};

export default NewsList;