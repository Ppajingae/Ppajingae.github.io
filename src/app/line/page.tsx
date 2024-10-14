'use client'
import { useState } from "react";
import "./line.css"
import championData from "@/app/champion";


interface Champion {
    number: number;
    name: string;
    image: string;
}

export default function Home() {

  // const [start, setStart] = useState(1);
  // const [end, setEnd] = useState(151);

  const [randomArg, setRandomArg] = useState(0);

    const champion : Champion[] = championData();

    function getRandomChampion(): number {
        return Math.floor(Math.random() * champion.length - 1) + 1;
    }

    return (
        <div className="global">
            <img
                src={`/image/${champion[randomArg].image}`}
                alt={champion[randomArg].name}
                width={200}
                height={200}/>
            <p>{champion[randomArg].name}</p>
            <button
                onClick={() => {
                    setRandomArg(getRandomChampion())
                }}
            >변경
            </button>
        </div>
    );
}
