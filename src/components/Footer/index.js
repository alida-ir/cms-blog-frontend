import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import "./index.css"

export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer> 
                <div className='copyright'>
                    <a href="https://alida.ir">{ t('copyright') }</a>
                </div>
         </footer>
    )
}
