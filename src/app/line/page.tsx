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

    const [randomArg, setRandomArg] = useState({
        number: 0,
        name: "랜덤으로 돌려 주세요",
        image: "random.png"
    });

    const champion : Champion[] = championData();

    function getRandomChampion(): Champion {
        const randomNumber =  Math.floor(Math.random() * champion.length - 1) + 1;

        return champion[randomNumber];
    }

    return (
        <div className="global">
            <img
                src={`/image/${randomArg.image}`}
                alt={randomArg.name}
                width={200}
                height={200}/>
            <p>{randomArg.name}</p>
            <button
                onClick={() => {
                    setRandomArg(getRandomChampion())
                }}
            >변경
            </button>
        </div>
    );
}
