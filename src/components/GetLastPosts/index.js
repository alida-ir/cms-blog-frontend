import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionItem from '../SectionItem';
import "./index.css"

export default function GetLastPosts() {
    const [ posts , setPosts ] = useState([]);
    const { t } = useTranslation();


    useEffect(() => {
            async function postData(url = "", data = {}) {
                    const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",   
                    },
                    body: JSON.stringify(data),
                    mode: "cors",
                    });
                    return response.json();
            }
                
            postData("https://api.alida.ir/api/posts/last", { token : 'test' }).then((data) => {
                    setPosts(data);
            }).catch(error => console.log(error + "Error in LastPost"));;
            
                
    } , [])

    return (
        <>
            <section className='sectionBlog'>
            <div className='sectionBlogTop'>
                <span>{ t("LastBlog") }</span>
                <Link to="/blog">{ t("seeAll") }</Link>
            </div>
            <div className='sectionBlogList'>
            {
                (posts).map(data => (
                    <SectionItem
                            key={data.id}
                            slug={data.slug}
                            title_fa={data.title_fa}
                            title_en={data.title_en}
                            created_at={data.created_at} 
                            caption_fa={data.caption_fa}
                            caption_en={data.caption_en}
                            image={data.cover} 
                            time_fa={data.time_fa}
                            time_en={data.time_en}
                    />
                ))
                    
            }
            </div>
            </section>   
       </>
    )
}
