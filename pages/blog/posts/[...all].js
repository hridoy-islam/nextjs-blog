
import Head from 'next/head';
import Image from 'next/image';
export default function Allpost(){
    return (
      <div>
        <Head>
          <title>All Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello World From All Post</h1>

        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
        />

        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    );
}