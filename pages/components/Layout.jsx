import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <MainNavigation/>
            <main>
                {children}
            </main>
            <Footer/>
        </>

    )
}

export default Layout
