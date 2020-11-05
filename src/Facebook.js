import React from 'react'
import styled from 'styled-components'
import { FacebookProvider, Comments, EmbeddedPost } from 'react-facebook';

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
`;

const Facebook = () => {
    return (
        <>
        <Wrapper>
        <FacebookProvider appId="1832935643512194">
            <EmbeddedPost href="https://www.facebook.com/DonaldTrump/posts/10165764490280725" />
        </FacebookProvider>
        </Wrapper>
            <Wrapper>
                <FacebookProvider appId="1832935643512194">
                    <Comments href="https://www.facebook.com/DonaldTrump/posts/10165764490280725" />
                </FacebookProvider>
            </Wrapper>
        </>
    )
}

export default Facebook
