import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBlock = styled.div`
    border-bottom:1px solid #eee;

    .inner{
        max-width:960px;
        margin:0 auto;
        text-align:center;
    }
`
const NavLinkBlock = styled(NavLink)`
    font-size:1.125rem;
    color:#3f3f3f;
    line-height:4.5rem;
    display:inline-block;
    transition:color 0.2s ease-in, opacity 0.15s;

    & + &{
        margin-left:1.8rem;
    }
    &.active{
        border-bottom:2px solid #22b8cf;
        color:#22b8cf;
    }
    &:hover{
        opacity:0.6;
        
    }

`

const Nav = () => {
    const categorys = [
        {
            name: 'all',
            text: '전체보기'
        },
        {
            name: 'business',
            text: '비즈니스'
        },
        {
            name: 'entertainment',
            text: '연예'
        },
        {
            name: 'health',
            text: '건강'
        },
        {
            name: 'science',
            text: '과학'
        },
        {
            name: 'sports',
            text: '스포츠'
        },
        {
            name: 'technology',
            text: '기술'
        },
    ]
    return (
        <NavBlock>
            <div className="inner">
                {categorys.map(category => <NavLinkBlock
                    to={category.name === 'all' ? '/' : `/${category.name}`}
                    key={category.name}
                    exact={category.name === 'all'}
                >
                    {category.text}
                </NavLinkBlock>)}
            </div>
        </NavBlock>
    );
};

export default Nav;