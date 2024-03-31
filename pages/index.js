import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>Mother Fucker</title>
      </Head>
      <section>
        <h1>
          This Business Owner is a lier. <br />
        </h1>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
