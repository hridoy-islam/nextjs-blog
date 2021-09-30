import Link from 'next/link';
function PostByID({ post }){
    return(
        <div>
            <h1>Details Page</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            
            <Link href={'/'}>Back to Home</Link>
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map( post => ({
        params: { id : post.id.toString()},
      }))

    return { paths, fallback: false }

}


export async function getStaticProps({ params }){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
    const post = await res.json()
    return { props: { post } }

}



export default PostByID