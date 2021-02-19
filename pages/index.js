import Head from "next/head";
import Layout from '../Component/Layout'
import {HeroSection} from '../Component/HeroSection/'
import {ListBlogs} from '../Component/AllBlogs/'

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <ListBlogs/>
    </Layout>
  );
}
