import React, { useEffect, useState } from 'react'
import './index.css'
import SectionItem from '../SectionItem'
import { useTranslation } from 'react-i18next'
import Pagination from '../Pagination'

const Section = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage , setCurrentPage] = useState(1);
    const [perPage , setPerpage] = useState(1);
    

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
                
            postData("https://api.alida.ir/api/posts", { token : 'test' }).then((data) => {
                setPosts(data);
                setLoading(false);
            }).catch(error => console.log(error + "Error in LastPost"));;
            
                
    } , [])

    const indexOfLastPost = currentPage * perPage ;
    const indexOfFristPost = indexOfLastPost - perPage ;
    const currentPosts = posts.slice(indexOfFristPost , indexOfLastPost)

    const paginator = num => setCurrentPage(num)

    const paginateNext = () => {
        if(currentPage < posts.length){
            setCurrentPage(currentPage + 1)
        }
    }

    const paginatePrev = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const paginateStart = () => setCurrentPage(1)


    const paginateEnd = () => setCurrentPage(posts.length / perPage)

    const CurrentClass = (num) => {
        if (num == currentPage) {
            return "active";
        }
    }

    
    if (loading) {
        return (
            <section className='sectionBlog'>
                    <h3>
                        Loading ...
                    </h3>
            </section>
        );
    }

    
  return (
    <section className='sectionBlog'>
        <div className='sectionBlogList'>

        {
            currentPosts.map((data, index) => (
                    <SectionItem 
                        key={index}
                        title_fa={data.title_fa} 
                        title_en={data.title_en} 
                        caption_fa={data.caption_fa} 
                        caption_en={data.caption_en} 
                        slug={data.slug} 
                        image={data.cover} 
                        time_fa={data.time_fa} 
                        time_en={data.time_en}  
                    />
            ))
        }

        <Pagination 
            totalPosts={posts.length} 
            perPagePost={perPage} 
            paginate={paginator} 
            paginatePrev={paginatePrev}
            paginateStart={paginateStart}
            paginateNext={paginateNext}
            paginateEnd={paginateEnd}
            CurrentClass={CurrentClass}
        />

        </div>
    </section>
  )
}

export default Section