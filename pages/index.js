import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


function Home({ posts }) {
  return (
    <Layout home>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <h1>Welcome to Next.js!</h1>
        <ul>
        {posts.map((post) => (
          <li key={post.id}> 
            <Link href={'/blog/posts/'+post.id} >{post.title}
            </Link>
          </li>
        
      ))}
          
        </ul>
      </section>
    </Layout>
    
  )
}

export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props : {
      posts,
    },
  }
}

export default Home
