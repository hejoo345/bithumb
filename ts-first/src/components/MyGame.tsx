import React, { Props } from 'react';

type MyGameProps = {
    game: string;
}

const MyGame:React.FC<MyGameProps>= ({game}) => {
    return(
            <div>
                <h2>MyGame.tsx</h2>
                {game}
            </div>
    )};

export default MyGame;