import React, { useState } from "react";

const Gugudan = () => {
    const [num1] = useState(Math.ceil(Math.random() * 9));
    const [num2] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState("");

    const fnSubmit = () => {
        if(parseInt(value) === num1*num2){
            alert("정답입니다.");
        }else{
            alert(`오답입니다.\n정답은 ${num1*num2}입니다.`);
        }
    }

    const fnValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>구구단</h1>
            <p>Q. {num1} X {num2}?</p>
            <form onSubmit={fnSubmit}>
                <input type="text" value={value} onChange={fnValue}/>
                <input type="submit" value="제출"/>
            </form>
        </>
    );
}
export default Gugudan;