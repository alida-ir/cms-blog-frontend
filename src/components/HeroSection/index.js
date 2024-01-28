import React from 'react'
import './index.css'

const HeroSection = ({ title , caption , className = null}) => {
  const Classes = className + " hero" 
  return (
    <section className={Classes}>
        <h1>{ title }</h1>
        <p>{ caption }</p>
    </section>
  )
}

export default HeroSection