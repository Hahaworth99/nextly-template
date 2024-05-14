// pages/Solutions/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Cta from '../components/cta';
import PopupWidget from '../components/popupWidget';
import Link from 'next/link';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children })  => {
  return (
    <>
        <Head>
            <title>Haworth NextGen</title>
            <meta
            name="description"
            content="Haworth NextGen provide optimal, up to date software solutions that fit your business needs. Align with our experts who are passionate about creating high spec software solutions."
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Cta />
        <Footer />
        <PopupWidget />
    </>
  );
};

export default Layout;
