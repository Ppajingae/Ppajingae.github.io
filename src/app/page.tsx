'use client'
import Link from "next/link";
import "./main.css"

export default function Home() {
  return (
    <div className="global">
        <main className="main">
            <Link href={"/solo"}>
                <button>챔피언</button>
            </Link>
            <Link href={"/line"}>
                <button>라인 & 챔피언</button>
            </Link>
        </main>
    </div>
  );
}
