import Header from './Header'

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <section className="main-layout">
                { children }
            </section>
        </>
    )
}

export default Layout