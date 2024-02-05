import React from "react";
 
function Article({id, title, date="January 1, 1970",preview}){
    return(
       <div key={id}>
       <article> 
        <h3>{title}</h3>
       <small>{date}</small>
       <p>{preview}</p>
       </article>
       </div>
    )
}

export default Article