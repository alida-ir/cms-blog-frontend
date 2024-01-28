import React from 'react'
import useLocalStorage from 'use-local-storage';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
    const [ theme , setTheme ] = useLocalStorage("light");

    return (
        <div  data-theme={theme}>
            <Header />
                <section>
                    <div className="contactMe">
                        <span>میتونیم با هم از طریق</span>
                        <a href="https://instagram.com/alida_ir"> اینستاگرام </a>
                        <a href="https://t.me/alida_ir"> تلگرام </a>
                        <a href="info@alida.ir"> ایمیل </a>
                        <span>با هم در ارتباط باشیم</span>
                    </div>
                </section>
            <Footer />
        </div>
    )
}
