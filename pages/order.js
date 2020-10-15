import Link from 'next/link'
import Head from 'next/head'

const OrderPage = () => {
    return(
        <>
            <Head>
                <title>next js tutorial:: order page</title>
            </Head>
            <h1>Order Page</h1>
            <Link href='/'>
                <a>Home Page</a>
            </Link>
        </>
    )
}

export default OrderPage