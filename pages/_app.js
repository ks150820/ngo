//import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import Layout from "../components/common/Layout";
import "../styles/HeroSection.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
