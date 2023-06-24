import './globals.css'

import '@assets/vendor/node_modules/css/swiper-bundle.min.css'
import '@assets/fonts/boxicons/css/boxicons.min.css'
import '@assets/vendor/node_modules/css/aos.css'
import '@assets/fonts/iconsmind/iconsmind.css'
import '@assets/vendor/masterslider/style/masterslider.css'
import '@assets/vendor/masterslider/skins/black-1/style.css'
import '@assets/css/theme.css'
import Script from 'next/script'

export const metadata = {
  title: '신대호',
  description: '폴트폴리오겸 이력서 사이트입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&family=Source+Serif+Pro:ital@0;1&display=swap"
          rel="stylesheet"></link>
        <Script src="/assets/vendor/node_modules/js/jquery.min.js" async></Script>
      </head>
      <body>
        {children}
        <Script src="/assets/js/theme.bundle.min.js" async></Script>
        <Script src="/assets/vendor/masterslider/masterslider.min.js" async></Script>
        <Script src="assets/vendor/node_modules/js/swiper-bundle.min.js"></Script>
      </body>
    </html>
  )
}
