import React, { useState } from "react";

const EndTalk = () => {
    const [prevValue, setPrevValue] = useState("");
    const [value, setValue] = useState("");

    const fnSubmit = (e) => {
        //정규식으로 비교 해야하지만 다음에

        //전단어가 빈값이 아니면 실행
        if(prevValue !== ""){
            //전에 입력했던 마지막 글자와 비교
            if(value.substr(0, 1) === prevValue.substr(-1, 1)){
                setPrevValue(value);
            }else{
                alert('"' + prevValue.substr(-1) + '"로 시작해야합니다.');
            }
        }
        e.preventDefault(); //submit될때, 새로고침 방지
        setValue("");
        document.querySelector("#target").focus();
    }

    const fnValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>끝말잇기</h1>
            <h3>전단어 : <span>{prevValue}</span></h3>
            <form onSubmit={fnSubmit}>
                <input type="text"  value={value} onChange={fnValue} id="target"/>
                <input type="submit" value="제출" />
            </form>
        </>
    );
}
export default EndTalk;