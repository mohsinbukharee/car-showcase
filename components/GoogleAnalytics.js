// components/GoogleAnalytics.js
import Head from 'next/head';

const GoogleAnalytics = () => (
  <Head>
    {/* Google Analytics Script */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CEBJ2ZS6K9"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CEBJ2ZS6K9');
      `}
    </script>
  </Head>
);

export default GoogleAnalytics;
