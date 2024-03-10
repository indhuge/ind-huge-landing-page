"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MyApp({}) {
  const router = useRouter();

  useEffect(() => {
    // Detect the browser's preferred language
    const browserLang = navigator.language;
    console.log(navigator.language);
    const supportedLocales = ['pt-BR', 'eu-US', 'es-ES'];
    let detectedLocale = 'en-US'; // fallback to 'en-US' if the browser's language is not supported

    if (supportedLocales.includes(browserLang)) {
      detectedLocale = browserLang;
    }

    // If the user hits the root path, redirect based on the browser's language
    alert(window.location.href)
    if(!window.location.href.includes("/en-US"||"/pt-BR"||"/es-ES")){
        router.replace(`/${detectedLocale}`);
    }
    
  }, [router]);
}