import React from 'react'

export default function Header() {

    const MenuButton = () => {
        document.querySelector(".MenuButton").classList.toggle("disable")
        document.querySelector(".CloseButton").classList.toggle("active")
        document.querySelector(".navBarMobile").classList.toggle("visible")
    }

    return (
        <header>
            <div className='navBar'>
                <div onClick={ MenuButton } className='navMobileMenu'>

                    <svg className='MenuButton' width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H24V2.2H0V0Z" fill="#1D2939"/>
                        <path d="M0 6.4H24V8.6H0V6.4Z" fill="#1D2939"/>
                        <path d="M24 12.8H8V15H24V12.8Z" fill="#1D2939"/>
                    </svg>

                    <svg className='CloseButton' width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.26367 8.23682L26.2342 25.2074L24.6786 26.763L7.70804 9.79245L9.26367 8.23682Z" fill="#1D2939"/>
                        <path d="M26.2334 9.79248L9.26283 26.763L7.7072 25.2074L24.6778 8.23685L26.2334 9.79248Z" fill="#1D2939"/>
                    </svg>

                </div>
                <div className='navBarRight'>
                    <div className='navBarSubscribe'>
                        <a href='#'>{ t("resumeButtonTop") }</a>
                    </div>
                    <div className='navBarMenu'>
                        <nav>
                            <ul>
                                <li><a href='#'>{ t('menuTopFirst') }</a></li>
                                <li><a href='#'>{ t('menuTopMiddle') }</a></li>
                                <li><a href='#'>{ t('menuTopLast') }</a></li>
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
                    {/* <select onChange={changeLanguageHandler} >
                        <option className='navBarLeftLangEn' value="en" >English</option>
                        <option className='navBarLeftLangFa' value="fa" >فارسی</option>
                    </select> */}
                    </div>
                    <div className='navBarLeftTheme'>
                        <button type='button' onClick={switching}>
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
                        <a href='#'>رزومه</a>
                    </div>
                    <div className='navBarMobileMenu'>
                        <nav>
                            <ul>
                                <li><a href='#'>خانه</a></li>
                                <li><a href='#'>وبلاگ</a></li>
                                <li><a href='#'>درباره من</a></li>
                            </ul>
                        </nav>
                    </div>
        </div>
         </header>
    )
}
