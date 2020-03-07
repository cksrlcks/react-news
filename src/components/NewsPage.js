import React from 'react';
import NewsList from '../components/NewsList'

const NewsPage = ({ match }) => {
    const category = match.params.category || ''
    return (
        <div>
            <NewsList category={category} />
        </div>
    );
};

export default NewsPage;