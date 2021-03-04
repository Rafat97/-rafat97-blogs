import { getPostBySlug, getAllPosts } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export async function getStaticProps(context) {
  //   const postData = await getPostData(params.id);
  const postData = await getPostBySlug(context.params.slug);
  // console.log(postData);
  return {
    props: postData,
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: {
      slug: post.slug,
      path: post.path,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default function Post(props) {
  // console.log(props);
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Layout>
        <article className="px-10 lg:mx-52 xl:mx-85 dark:text-white">
          <h1>{props.title}</h1>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
          <div className="py-10">
            <Link href="/">
              <a>
                <h3>Back to Home</h3>
              </a>
            </Link>
          </div>
        </article>
      </Layout>
    </>
  );
}
