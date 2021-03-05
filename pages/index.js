import Head from "next/head";
import Layout from "../components/Layout";
import { HeroSection } from "../components/HeroSection/";
import { ListBlogs } from "../components/AllBlogs/";
import {Footer} from "../components/Footer"
import { getAllPosts } from '../lib/posts'

// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/markdownToHtml.js


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Welcome to Rafat's Blogs</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <HeroSection />
        <ListBlogs posts = {props.posts}/>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      // title: config.title,
      // description: config.description
    }
  }
}

