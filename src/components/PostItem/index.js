import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { redirect, useNavigate } from 'react-router-dom';
import"./index.css"

export default function PostItem({slug}) {
    const [ post , setPost ] = useState([]);
    const { i18n } = useTranslation();
    const navigate = useNavigate();


    useEffect(() => {  
        const postData = async (url , data) => {
            const response = await fetch(url , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                },
                body: JSON.stringify(data),
            })
            return response
        };

        postData("https://api.alida.ir/api/post/" + slug , { token : 'test' , accept : "application/json" , "Content-Type": "application/json" })
        .then((data) => {
                if(data.status === 404){
                    console.log(data.status);
                    return navigate("/blog");
                }else{
                    let ResponseData = data.json()
                    ResponseData.then(function(result){
                        setPost(result.data)
                    })
                }
        }).catch(error => console.log("useEffect"));
    } , [])

    let title = post.title_fa
    let body = post.body_fa
    let time = post.time_fa
    let cover = post.cover

    if (i18n.language == "en") {
        title = post.title_en
        body = post.body_en
        time = post.time_en
    }

    
    return (
        <section className='PostItem'>

        <div className="BoxInfo">
        <span className="BoxInfoTitle">{ title }</span>
        <span className="BoxInfoTime">{ time }</span>
        </div>

        <div className='BlogCover'>
            <img src={cover} />
        </div>

        <div className="PostItemBody" dangerouslySetInnerHTML={{__html: body}}></div>
 
        </section>
    )
}
