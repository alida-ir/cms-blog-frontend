import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function BlogItem() {
    let { slug } = useParams();  

    useEffect(() => {
        console.log(slug);
        
    }, [])

    return (
        <div>
            <button  type="submit">hello</button>
        </div>
    )
}
