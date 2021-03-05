import { getPostBySlug, getAllPosts } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
          <h1 className="text-center text-5xl my-10 subpixel-antialiased font-bold">
            {props.title}
          </h1>
          <div className="text-center py-5">
            {props.meta.tags.split(",").map(function (tag, idx) {
              return (
                <div
                  key={idx}
                  className="mx-2 text-xs inline-flex items-center font-bold
                leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700
                rounded-full"
                >
                  {tag}
                </div>
              );
            })}
          </div>

          <div className="text-center py-5">
                <div
                  className="mx-2 text-xs inline-flex items-center font-bold
                leading-sm px-3 py-1 bg-blue-200 text-blue-700
                rounded-full"
                >
                  {props.meta.readTime} for Time to Read 
                </div>
          </div>

          
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
          <div className="py-10">
            <Link href="/">
              <a>
                <h3>
                  {" "}
                  <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
                </h3>
              </a>
            </Link>
          </div>
        </article>
      </Layout>
    </>
  );
}
