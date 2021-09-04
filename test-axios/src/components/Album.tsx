import React from 'react';
import styled from 'styled-components';
interface Props{
    id: number;
    title: string;
    thumbnailUrl: string;
    url: string;
}
const Album:React.FC<Props> = ({id, title, thumbnailUrl, url})=> {
    return(
            <AlbumDiv>
                <div><img src={thumbnailUrl} alt={title}></img></div>
                <div>
                    <p>{id}, {title}</p>
                    <Url href={url}>{url}</Url>
                </div>
            </AlbumDiv>
    )};

    const AlbumDiv = styled.div`
        background-color: white;
        border-radius: 12px;
        width: 400px;
        margin: 1em;
        padding: 0.5em;
    `;

    const Url = styled.a`
        text-decoration: none;
    `;

export default Album;