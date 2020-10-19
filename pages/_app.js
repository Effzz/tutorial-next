import '../styles/globals.css'
import Head from "next/head"

const App = ({ Component, pageProps })  =>{
    return(
        <>
            <Head>
                <script src="https://cdn.rawgit.com/jpillora/xdomain/0.7.4/dist/xdomain.min.js"></script>
                <script src="/assets/js/xdomain.settings.js"></script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App