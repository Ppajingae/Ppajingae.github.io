'use client'
import { useState } from "react";


export default function Home() {

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(151);
  const [randomArg, setRandomArg] = useState(0);
  const champion : number[] = [];

  for(let i = start; i <= end; i++){
    champion.push(i);
  }

    const getRandomChampion = (): number => {
        const randomIndex = Math.floor(Math.random() * champion.length);
        return champion[randomIndex];
    }

  return (
    <div>
      <p>{randomArg}</p>
      <button
          onClick={()=>{
            setRandomArg(getRandomChampion())
          }}
      >변경</button>
    </div>
  );
}
