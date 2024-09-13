import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function FirstPost(){
    return (
        <Layout>            
            <Head>
                <title>First Next Page</title>
            </Head>
            <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
            >

            </Script>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="seo keywords"
                >

            </Image>
            <h1>First Post</h1>
            <Link href="/"> <h2>Back Home</h2> </Link>
        </Layout>
    )
}