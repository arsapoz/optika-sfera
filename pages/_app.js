import Layout from './components/Layout';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  return (
    <Html lang="sr">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Html>
  )
}

export default MyApp
