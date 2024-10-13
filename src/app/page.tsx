import Link from "next/link";

export default function Home() {
  return (
    <div>
        <main>
            <Link href={"/solo"}>
                <button>챔피언</button>
            </Link>

            <button>라인 & 챔피언</button>
        </main>
    </div>
  );
}
