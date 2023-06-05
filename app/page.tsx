import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        Node runtime link ✅:&nbsp;
        <Link href="/nodejs">
          <code className="font-mono font-bold">/nodejs</code>
        </Link>
      </p>
      <p>
        Edge runtime link ❌:&nbsp;
        <Link href="/edge">
          <code className="font-mono font-bold">/edge</code>
        </Link>
      </p>
    </>
  );
}
