import { useRouter } from 'next/router';
import Layout from '../../components/layout';
export default function post(){

    const router = useRouter()

    const { slug, abc } = router.query

    console.log(router.query)

    return (
        <Layout>
        <div>
            <h1>Hello {slug}!</h1>

            <p>{abc}</p>
        </div>
        </Layout>
    )

}