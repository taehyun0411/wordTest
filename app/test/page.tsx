'use client';

import {any} from "prop-types";
import React, {useEffect, useRef, useState} from "react";
import {Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

interface DataArrays {
  [key: string]: any;
}
const T11 =   require('../../public/data/1-1.json')
  const T12 = require('../../public/data/1-2.json')
  const T13 = require('../../public/data/1-3.json')
  const T16 = require('../../public/data/1-6.json')
  const T18 = require('../../public/data/1-8.json')
  const T19 = require('../../public/data/1-9.json')
  const T111 = require('../../public/data/1-11.json')
  const T112 = require('../../public/data/1-12.json')
  const T21 = require('../../public/data/2-1.json')
  const T24 = require('../../public/data/2-4.json')
  const T26 = require('../../public/data/2-6.json')
  const T29 = require('../../public/data/2-9.json')
  const T211 = require('../../public/data/2-11.json')
  const T212 = require('../../public/data/2-12.json')
  const T31 = require('../../public/data/3-1.json')
  const T32 = require('../../public/data/3-2.json')
  const T33 = require('../../public/data/3-3.json')
  const T36 = require('../../public/data/3-6.json')
  const T38 = require('../../public/data/3-8.json')
  const T39 = require('../../public/data/3-9.json')
  const T310 = require('../../public/data/3-10.json')
  const T41 = require('../../public/data/4-1.json')
  const T42 = require('../../public/data/4-2.json')
  const T43 = require('../../public/data/4-3.json')
  const T44 = require('../../public/data/4-4.json')
  const T45 = require('../../public/data/4-4.json')
  const T46 = require('../../public/data/4-4.json')

  const data: DataArrays = {
    data11: jsonToArray(T11),
    data12: jsonToArray(T12),
    data13: jsonToArray(T13),
    data16: jsonToArray(T16),
    data18: jsonToArray(T18),
    data19: jsonToArray(T19),
    data111:jsonToArray(T111),
    data112:jsonToArray(T112),
    data21: jsonToArray(T21),
    data24: jsonToArray(T24),
    data26: jsonToArray(T26),
    data29: jsonToArray(T29),
    data211: jsonToArray(T211),
    data212: jsonToArray(T212),
    data31: jsonToArray(T31),
    data32: jsonToArray(T32),
    data33: jsonToArray(T33),
    data36: jsonToArray(T36),
    data38: jsonToArray(T38),
    data39: jsonToArray(T39),
    data310: jsonToArray(T310),
    data41: jsonToArray(T41),
    data42: jsonToArray(T42),
    data43: jsonToArray(T43),
    data44: jsonToArray(T44),
    data45: jsonToArray(T45),
    data46: jsonToArray(T46)

}

export default function Home() {

  let tempdayResult : string[] = [];
  const [RdayResult,setRdayResult] = React.useState<string[]>([]);
const [incorrectAnswer,setincorrectAnswer] = React.useState<string[]>([]);

  useEffect(() => {

    const temp = sessionStorage.getItem('data')

    if(temp) {
      const result = JSON.parse(temp);
      const resultArrays = result.map((key: string) =>  {
          const dataKey = `data${key.replace("-", "")}`;

          if (!tempdayResult.includes(data[dataKey])) {
              tempdayResult.push(...data[dataKey]);
            }
      });
      const dayResult = tempdayResult.filter((el, index) => tempdayResult.indexOf(el) === index);
         setRdayResult(shuffle(dayResult));

    } else {
      console.log("error");
    }
  }, []);
  console.log(RdayResult);
  const [currentWordindex, setCurrentWordindex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null); // 초기값을 HTMLInputElement | null로 지정

     useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentWordindex]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(RdayResult[currentWordindex][4] === userAnswer) {
      alert("Correct!");
    } else {
      alert("InCorrect! 정답: " + RdayResult[currentWordindex][4]);
      setincorrectAnswer((prevIncorrectAnswer) => {
    return [...prevIncorrectAnswer, RdayResult[currentWordindex][4]];
  });
    }
    setUserAnswer('');
    setCurrentWordindex(currentWordindex + 1);

  };
  if(currentWordindex >= RdayResult.length) {
    return (

        <div className="flex flex-col items-center justify-center">
        <p>테스트가 종료되었습니다.</p>
        <Textarea
          isReadOnly
          label="틀린 단어는 다음과 같습니다."
          variant="bordered"
          labelPlacement="outside"
          placeholder={incorrectAnswer.join('\n')}
          className = "mt-6"
          />

        </div>
        );
  } else {

    return (
        <div className="flex flex-col items-center justify-center">
          <p>총 단어 개수 : {RdayResult.length}</p>

            <p>남은 단어 개수 : {RdayResult.length-currentWordindex}</p>
          <Textarea
          isReadOnly
          label="영어 문장"
          variant="bordered"
          labelPlacement="outside"
          placeholder={RdayResult[currentWordindex][2]}

          />
          <Textarea
              isReadOnly
          label="해석"
          variant="bordered"
          labelPlacement="outside"
          placeholder={RdayResult[currentWordindex][3]}

          className = "mt-6"
          />
          <form onSubmit={handleSubmit} className="mt-6">
            <Input
                type="text"
                value={userAnswer}
                onChange={(e: any) => setUserAnswer(e.target.value)}
                placeholder="영어단어를 입력하세요."
                label = "Answer"
                ref={inputRef}
            />
            <Button color="primary" type="submit" className="mt-6">
                NEXT
            </Button>
          </form>
        </div>

    )
  }
};

  function jsonToArray(data : Array<any>) {
    let arr = [];

    for (let i = 0; i < data.length; i++) {

      const temp : any = Object.values(data[i])
      arr.push(temp)
    }
    return arr;
  }
  function shuffle(array : string[]) {
  for (let i = array.length - 1; i > 0; i--) {
		// 무작위로 index 값 생성 (0 이상 i 미만)
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}