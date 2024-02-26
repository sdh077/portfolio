import '../globals.css'

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

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Script src="/assets/js/theme.bundle.min.js" async></Script>
      <Script src="/assets/vendor/masterslider/masterslider.min.js" async></Script>
      <Script src="assets/vendor/node_modules/js/swiper-bundle.min.js"></Script>
    </>
  )
}
