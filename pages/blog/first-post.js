import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <div>
        <h1>Hello FirstPost</h1>
        <Link href="/"> Back To Home </Link>
      </div>
    </Layout>
  );
}
