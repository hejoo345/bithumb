import React from 'react';
interface MyColorProps {
    kind: string;
    desc: string;
}
const MyColor:React.FC<MyColorProps> = ({kind, desc}) => {
    const mc = { fontSize: '24px', color: 'hotpink'};
    return(
            <div style={mc}>
                MyColor.tsx<p></p>
                {kind} {desc}
            </div>
    )};

export default MyColor;