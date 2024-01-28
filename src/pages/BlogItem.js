import React from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostItem from '../components/PostItem';


export default function BlogItem() {
    const [ theme , setTheme ] = useLocalStorage("light");
    let { slug } = useParams();

    return (
        <div  data-theme={theme}>
            <Header /> 
                <PostItem slug={slug} />
            <Footer />
        </div>
    )
}