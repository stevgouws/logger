import NextButton from "./NextButton";
import Head from "next/head";
import PropTypes from "prop-types";
import { main } from "./layout.styl";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Logger</title>
        <link rel="icon" href="/chart.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->  */}
        <link
          rel="apple-touch-startup-image"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          href="/apple-launch-750x1334.png"
        />
      </Head>
      <main className={main}>
        {children}
        <NextButton />
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
