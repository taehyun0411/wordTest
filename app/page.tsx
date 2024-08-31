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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);//옵션의 초기 상태와 옵션의 값 설정을 구현
  const { handleSubmit } = useForm(); // 제출 형태를 구현(Button{submit})
  const router = useRouter();//페이지간 전환을 구현
  const options = [
      { label: '7-1', value: '7-1' },
      { label: '7-2', value: '7-2' },
      { label: '7-3', value: '7-3' },
      { label: '7-4', value: '7-4' },
      { label: '7-7', value: '7-7' },
      { label: '7-8', value: '7-8' },
      { label: '7-9', value: '7-9' },
      { label: '7-10', value: '7-10' },
      { label: '8-1', value: '8-1' },
      { label: '8-2', value: '8-2' },
      { label: '8-3', value: '8-3' },
      { label: '8-4', value: '8-4' },
      { label: '8-7', value: '8-7' },
      { label: '8-8', value: '8-8' },
      { label: '8-9', value: '8-9' },
      { label: '8-10', value: '8-10' },
      { label: '9-1', value: '9-1' },
      { label: '9-2', value: '9-2' },
      { label: '9-3', value: '9-3' },
      { label: '9-4', value: '9-4' },
      { label: '9-8', value: '9-8' },
      { label: '9-9', value: '9-9' },
      { label: '9-10', value: '9-10' },
      { label: '9-11', value: '9-11' },
      { label: '10-1', value: '10-1' },
      { label: '10-2', value: '10-2' },
      { label: '10-3', value: '10-3' },
      { label: '10-4', value: '10-4' },
      { label: '10-8', value: '10-8' },
      { label: '10-9', value: '10-9' },
      { label: '10-10', value: '10-10' },
      { label: '10-11', value: '10-11' },

  ];

  const onSubmit = (data : any) => {
      sessionStorage.setItem('data',JSON.stringify(selectedOptions));
       setSelectedOptions([]);
  };

  const handleCheckboxChange = (values : any) => {
    setSelectedOptions(values);
  };

    const handleSelectAll = () => {
    const allValues = options.map((option) => option.value);
    setSelectedOptions(allValues);
  };

  const handleDeselectAll = () => {
    setSelectedOptions([]);
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
        <div className="flex flex-row items-center justify-center mt-4">
            <Button color="primary" type="button" onClick={handleSelectAll} className="mr-2">
                Select All
            </Button>
            <Button color="primary" type="button" onClick={handleDeselectAll}>
                Deselect All
            </Button>
        </div>
        <Button color="primary" type="submit" className="flex flex-col items-center justify-center mt-6"
                onClick={handleClick}>
            NEXT
        </Button>
    </form>
  );
};







