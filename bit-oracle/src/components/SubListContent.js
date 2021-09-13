import React from 'react'


function SubListContent({idx,name,title,wdate,pay}) {
    return (
        <div>
            {idx} {name} {title} {wdate} {pay}<br></br>
        </div>
    )
}//end


export default  SubListContent;