import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayOut';
import { Pretendard } from './fonts/font';
import Head from 'next/head';
import Script from 'next/script';

export const metadata: Metadata = {
    title: '제천메이트',
    description: '제천여행도우미',
    manifest: '/manifest.json',
    icons: {
        icon: '/192.png',
        shortcut: '/192.png',
        apple: '/192.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/192.png',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
                />
                <meta name="theme-color" content="#fcfff8" />
            </Head>
            <body className={Pretendard.className}>
                {' '}
                <Script
                    src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.min.js"
                    integrity="sha384-kLbo2SvoNtOFiniJ1EQ9o2iDA8i3xp+O6Cns+L5cd4RsOJfl+43z5pvieT2ayq3C"
                    crossOrigin="anonymous"
                ></Script>
                <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
