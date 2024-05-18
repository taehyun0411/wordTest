'use client';

import {Checkbox, CheckboxGroup} from "@nextui-org/checkbox";
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from "@nextui-org/button";
import { useRouter} from "next/navigation";




export default function Home() {

	return (
        <div>
		<div className="flex flex-col items-center justify-center">
			<div className="mt-6">
				{ title() }
			</div>
			<div className="mt-6">
                { Checking() }
			</div>
        </div>

        </div>
    );
}

const title = () => {
    return (
        <div>
            <span className="text-white font-bold text-4xl">SemiColon</span>
        </div>
    );
}; //semicolon 글씨 함수
const Checking = () => { //주석 달기 너무 귀찮 모르는거 걍 물어봐
  const [selectedOptions, setSelectedOptions] = useState([]);//옵션의 초기 상태와 옵션의 값 설정을 구현
  const { handleSubmit } = useForm(); // 제출 형태를 구현(Button{submit})
  const router = useRouter();//페이지간 전환을 구현

  const options = [
      { label: '1-1', value: '1-1' },
      { label: '1-2', value: '1-2' },
      { label: '1-3', value: '1-3' },
      { label: '1-6', value: '1-6' },
      { label: '1-8', value: '1-8' },
      { label: '1-9', value: '1-9' },
      { label: '1-11', value: '1-11' },
      { label: '1-12', value: '1-12' },
      { label: '2-1', value: '2-1' },
      { label: '2-4', value: '2-4' },
      { label: '2-6', value: '2-6' },
      { label: '2-9', value: '2-9' },
      { label: '2-11', value: '2-11' },
      { label: '2-12', value: '2-12' },
      { label: '3-1', value: '3-1' },
      { label: '3-2', value: '3-2' },
      { label: '3-3', value: '3-3' },
      { label: '3-6', value: '3-6' },
      { label: '3-8', value: '3-8' },
      { label: '3-9', value: '3-9' },
      { label: '3-10', value: '3-10' },
      { label: '4-1', value: '4-1' },
      { label: '4-2', value: '4-2' },
      { label: '4-3', value: '4-3' },
      { label: '4-4', value: '4-4' },
      { label: '4-5', value: '4-5' },
      { label: '4-6', value: '4-6' },

  ];

  const onSubmit = (data : any) => {
      sessionStorage.setItem('data',JSON.stringify(selectedOptions));
       setSelectedOptions([]);
  };

  const handleCheckboxChange = (values : any) => {
    setSelectedOptions(values);
  };
  const handleClick = () => {
      router.push("/test");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckboxGroup
        label="Choose The day"
        value={selectedOptions}
        onChange={handleCheckboxChange}
        orientation="horizontal"
        className="flex flex-col items-center justify-center mt-6"
      >
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    <Button color="primary" type='submit' className="flex flex-col items-center justify-center mt-6"
    onClick={handleClick}>
      NEXT
    </Button>
    </form>
  );
};







