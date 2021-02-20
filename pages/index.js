import Head from "next/head";
import Layout from "../components/Layout";
import { HeroSection } from "../components/HeroSection/";
import { ListBlogs } from "../components/AllBlogs/";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Rafat's Blogs</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <HeroSection />
        <ListBlogs />
      </Layout>
    </>
  );
}
