import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';
import Footer from '../components/Footer';
import GetLastPosts from '../components/GetLastPosts';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';


export default function Home() {
    const [ theme , setTheme ] = useLocalStorage("light");
    const { t } = useTranslation();

    return (
        <div  data-theme={theme}>
            <Header />
                <HeroSection title={ t('LastBlogPost') } caption={ t('captionHomeHeroSection') } className="customHeroBlog" />
                <GetLastPosts />
            <Footer />
        </div>
    )
}