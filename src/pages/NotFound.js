import React from 'react'
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

export default function NotFound() {
    const [ theme , setTheme ] = useLocalStorage("light");
    const { t } = useTranslation();

    return (
        <div data-theme={theme}>
            <Header />
                <HeroSection title={ t('NotFound') } className="customHeroBlog" />
            <Footer />
        </div>
    )
}
