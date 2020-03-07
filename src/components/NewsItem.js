import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display:flex;
    
    & + & {
        border-top:1px solid #eee;
        padding-top:2rem;
        margin-top:2rem;
    }

    .thumbnail{
        width:300px;
        margin-right:1.5rem;
        a{
            display:block;
            img{
                width:100%; 
                height:auto;
            }
        }
        
    }

    .contents{
        flex:1;
        h2{
            margin-bottom:1rem;
            display:block;
            whitespace:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            line-height:1.7em;            
            a{
                transition:color 0.2s;
                color:#333;
                font-weight:500;
                font-size:1.4rem;
            }
            &:hover a{
                color:#22b8cf;
            }
        }
        p{
            line-height:1.8em;
        }

    }
`
const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article
    return (
        <NewsItemBlock>
            <div className="thumbnail">
                {urlToImage && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                )}
            </div>
            <div className="contents">
                <h2>
                    <a href={url} target="blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;