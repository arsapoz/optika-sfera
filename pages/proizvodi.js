import DioptricGlasses from "./components/DioptricGlasses";
import Sunglasses from "./components/Sunglasses";

const Proizvodi = () => {

    return (
        <>
            <Head>
                <title>Proizvodi - optika Sfera</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Najbolja ponuda dioptrijskih, sunčanih naočara i sočiva svih brendova"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta property="og:title" content="Proizvodi - dioptrijske naočare, sunčane naočare, sočivo i dodatna oprema"></meta>
            </Head>
            <div className="bg-gray-100">
                <DioptricGlasses />
                <Sunglasses />
            </div>
        </>
    );
}
export default Proizvodi;