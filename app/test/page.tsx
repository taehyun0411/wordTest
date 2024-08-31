'use client';

import {any} from "prop-types";
import React, {useEffect, useRef, useState} from "react";
import {Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

interface DataArrays {
  [key: string]: any;
}
const T11 =   require('../../public/data/7-1.json')
  const T12 = require('../../public/data/7-2.json')
  const T13 = require('../../public/data/7-3.json')
  const T16 = require('../../public/data/7-4.json')
  const T18 = require('../../public/data/7-7.json')
  const T19 = require('../../public/data/7-8.json')
  const T111 = require('../../public/data/7-9.json')
  const T112 = require('../../public/data/7-10.json')
  const T21 = require('../../public/data/8-1.json')
  const T24 = require('../../public/data/8-2.json')
  const T26 = require('../../public/data/8-3.json')
  const T29 = require('../../public/data/8-4.json')
  const T211 = require('../../public/data/8-7.json')
  const T212 = require('../../public/data/8-8.json')
  const T31 = require('../../public/data/8-9.json')
  const T32 = require('../../public/data/8-10.json')
  const T33 = require('../../public/data/9-1.json')
  const T36 = require('../../public/data/9-2.json')
  const T38 = require('../../public/data/9-3.json')
  const T39 = require('../../public/data/9-4.json')
  const T310 = require('../../public/data/9-8.json')
  const T41 = require('../../public/data/9-9.json')
  const T42 = require('../../public/data/9-10.json')
  const T43 = require('../../public/data/9-11.json')
  const T44 = require('../../public/data/10-1.json')
  const T45 = require('../../public/data/10-2.json')
  const T46 = require('../../public/data/10-3.json')
  const T47 = require('../../public/data/10-4.json')
  const T48 = require('../../public/data/10-8.json')
  const T49 = require('../../public/data/10-9.json')
  const T50 = require('../../public/data/10-10.json')
  const T51 = require('../../public/data/10-11.json')
  const data: DataArrays = {
    data71: jsonToArray(T11),
    data72: jsonToArray(T12),
    data73: jsonToArray(T13),
    data74: jsonToArray(T16),
    data77: jsonToArray(T18),
    dat78: jsonToArray(T19),
    data79:jsonToArray(T111),
    data710:jsonToArray(T112),
    data81: jsonToArray(T21),
    data82: jsonToArray(T24),
    data83: jsonToArray(T26),
    data84: jsonToArray(T29),
    data87: jsonToArray(T211),
    data88: jsonToArray(T212),
    data89: jsonToArray(T31),
    data810: jsonToArray(T32),
    data91: jsonToArray(T33),
    data92: jsonToArray(T36),
    data93: jsonToArray(T38),
    data94: jsonToArray(T39),
    data98: jsonToArray(T310),
    data99: jsonToArray(T41),
    data910: jsonToArray(T42),
    data911: jsonToArray(T43),
    data101: jsonToArray(T44),
    data102: jsonToArray(T45),
    data103: jsonToArray(T46),
    data104: jsonToArray(T47),
    data108: jsonToArray(T48),
    data109: jsonToArray(T49),
    data1010: jsonToArray(T50),
    data1011: jsonToArray(T51),

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