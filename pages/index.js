import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import allEndPoints from "../utils/requests";

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>Hulu 2.0</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Nav />
            <Results />
            <h1>{props.results}</h1>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const genre = context.query.genre;

    const request = await fetch(
        `https://api.themoviedb.org/3${allEndPoints[genre]?.url}`
    ).then((res) => {
        console.log(res.json());
    });
    return {
        props: {
            results: "Test",
        },
    };
};
