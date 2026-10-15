import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
export const metadata:Metadata={title:'Projeto 02 - Cardápio Digital - Brasa Burguer',description:'Escolha seu burger, personalize e monte sua sacola. Demonstração de cardápio digital por Marcelo Andrade.',robots:{index:false,follow:false}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',interactiveWidget:'resizes-content',themeColor:'#faf7f2'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>;}
