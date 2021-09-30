
// const UserSetting = () => {

import { useRouter } from 'next/router';
const customRouter = useRouter();
const {username} = customRouter.query;


export default function UserSetting(){
    return(
        <div>
            <h1>User Settings page {username}</h1>
        </div>
    )
}