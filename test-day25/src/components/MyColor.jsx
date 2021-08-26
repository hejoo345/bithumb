import React from 'react';

const MyColor = ({kind, desc}) => {
    const mc = { fontSize: '24px', color: 'hotpink'};
    return(
            <div style={mc}>
                MyColor.js<p></p>
                {kind} {desc}
            </div>
    )};

export default MyColor;