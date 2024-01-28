import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import useLocalStorage from 'use-local-storage';
import dark from  '../../image/1.png'
import light from  '../../image/2.png'
import iranFlag from "../../image/iranFlag.png"
import AmericanFlag from "../../image/AmericanFlag.png"
import './index.css'
import { changeLanguage } from 'i18next';
import { Link } from 'react-router-dom';


const Header = () => {

    const [ lang , setLang ] = useLocalStorage("lang");
    const [ theme , setTheme ] = useLocalStorage("light");

    const { t, i18n } = useTranslation();

    const MenuButton = () => {
        document.querySelector(".navMobileMenu").classList.toggle("openBox")
        // document.querySelector(".CloseButton").classList.toggle("active")
        document.querySelector(".navBarMobile").classList.toggle("visible")
    }
        
    const changeLanguageHandler = () => {
        const newLang = lang === "en" ? "fa" : "en" ;
        setLang(newLang)
        document.querySelector('.navBarLeftLangFlagEn').classList.toggle("active")
        document.querySelector('.navBarLeftLangFlagFa').classList.toggle("disable")
        document.querySelector('body').classList.toggle("ltr")
        changeLanguage(newLang);
    }

    const SwitchTheme = () => {
        const newTheme = theme == "light" ?  "dark" : "light"
        setTheme(newTheme)
        document.querySelector(".navThemeDark").classList.toggle("disable")
        document.querySelector(".navThemeLight").classList.toggle("active")
    }

    useEffect(() => {
        changeLanguage(lang)
        if(lang === "en"){
            document.querySelector('.navBarLeftLangFlagEn').classList.add("active")
            document.querySelector('.navBarLeftLangFlagFa').classList.add("disable")
            document.querySelector('body').classList.add("ltr")
        }
        if(theme === "dark"){
            document.querySelector(".navThemeDark").classList.add("disable")
            document.querySelector(".navThemeLight").classList.add("active")
        }
    } , [])

    return (
        <header data-theme={theme}>
            <div className='navBar'>
                <div onClick={ MenuButton } className='navMobileMenu'>
                    <span className="navMobileMenuIconOne"></span>
                    <span className="navMobileMenuIconTwo"></span>
                    <span className="navMobileMenuIconTree"></span>
                </div>
                <div className='navBarRight'>
                    <div className='navBarSubscribe'>
                        <a href='#'>{ t("resumeButtonTop") }</a>
                    </div>
                    <div className='navBarMenu'>
                        <nav>
                            <ul>
                                <li><Link to="/">{ t('menuTopFirst') }</Link></li>
                                <li><Link to="/blog">{ t('menuTopMiddle') }</Link></li>
                                <li><Link to="/contact">{ t('menuTopLast') }</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='navBarLeft'>
                    <div className='navBarLeftLang'>
                    <div className='navBarLeftLangFlag' onClick={changeLanguageHandler}>
                        <img className='navBarLeftLangFlagFa' src={iranFlag} alt="Fa" />
                        <img className='navBarLeftLangFlagEn' src={AmericanFlag} alt="En" />
                    </div>
                    </div>
                    <div className='navBarLeftTheme'>
                        <button type='button' onClick={SwitchTheme}>
                            <img className='navThemeDark' src={light} />
                            <img className='navThemeLight' src={dark} />
                        </button>
                    </div>
                    <div className='navBarLeftLogo'>
                        <span>{ t('name') }</span>
                    </div>
                </div>
            </div>
            <div className='navBarMobile'>
                    <div className='navBarMobileSubscribe'>
                        <a href='#'>{t('resume')}</a>
                    </div>
                    <div className='navBarMobileMenu'>
                        <nav>
                            <ul>
                                <li><Link to="/">{ t('menuTopFirst') }</Link></li>
                                <li><Link to="/blog">{ t('menuTopMiddle') }</Link></li>
                                <li><Link to="/contact">{ t('menuTopLast') }</Link></li>
                            </ul>
                        </nav>
                    </div>
        </div>
         </header>
    )
}


export default Header