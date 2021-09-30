import { useRouter } from "next/router"

export default function Username(){

    const router = useRouter()

    const { username } = router.query

    return(
        <div>
            <h2>UserName is {username}</h2>
        </div>
    )
}