import "../styles/global.styl";
import { StateProvider } from "../store";
export default function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />;
    </StateProvider>
  );
}
