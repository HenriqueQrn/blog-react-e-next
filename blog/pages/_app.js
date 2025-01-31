import Head from "next/head"
import Link from "next/link"

import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps}) {
    return <>
    <Head>
        <title>Meu blog</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="py-10 bg-gradient-to-r from-green-400 to-blue-500 text-center">
        <Link href="/">

            <h2 className="text-5x1 font-bold text-white">
                Meu blog
            </h2>

        </Link>
    </header>

    <main className="my-6 mx-auto p-6 bg-white sm:shadow-lg rounded prose lg:prose-x1">
        <Component {...pageProps} />
    </main>
    </>;
}

export default MyApp
