import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import './index.css'

const SectionItem = ({ title_fa , title_en , caption_fa , caption_en , slug , image , time_fa , time_en }) => {
  const { i18n } = useTranslation();
  let title = title_fa;
  let caption = caption_fa;
  let time = time_fa
  if (i18n.language == "en") {
    title = title_en
    caption = caption_en
    time = time_en
  }

  return (
     <div className='sectionBlogListItem'>
        <div className='sectionBlogListItemInfo'>
        <Link to={`/blog/${slug}`} className='created_at'>{ time }</Link>
            <Link to={`/blog/${slug}`} className='title'>{ title }</Link>
            <Link to={`/blog/${slug}`} className='caption'>{ caption }</Link>
        </div>
        <Link to={`/blog/${slug}`} className='sectionBlogListItemPicture'>
            <img src={image} alt='Picture'/>
        </Link>
    </div>
  )
}

export default SectionItem