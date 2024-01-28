import React from 'react';
import useLocalStorage from 'use-local-storage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionPosts from '../components/SectionPosts';


export default function Blog() {
    const [ theme , setTheme ] = useLocalStorage("light");

    return (
        <div  data-theme={theme}>
            <Header />
                <SectionPosts />
            <Footer />
        </div>
    )
}