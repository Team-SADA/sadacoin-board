import './issue.scss';
import React, {useState} from "react";
import axios from "axios";

export default function Issue() {
    const [val, setVal] = useState<number | null>(null);
    const [studentId, setStudentId] = useState<string>('');
    const [name, setName] = useState<string>('');

    const submit = () => {
        const new_studentid = studentId === '' ? '0' : studentId;
        const new_name = name[name.length - 1] === name[name.length - 2] ? name.slice(0, name.length - 1) : name;
        axios.get(`https://sada.ziho.kr/coin/register-mini/${new_studentid}/${new_name}`).then((result) => {
            setVal(result.data["id"]);
        }).catch(() => {});
    };

    return (
        <div className="Issue">
            <h1>
                <span>필수</span> SADA 인증번호 발급
            </h1>
            <p>
                부스를 이용하려면 인증번호를 발급받아야 합니다!<br/>
                타인의 정보를 입력할 경우 불이익이 있습니다.
            </p>
            <div className={"form"}>
                <input type={"text"} id={'studentid'} placeholder={"학번 (교사/외부인이라면 비워두세요)"} onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} onChange={(e) => setStudentId(e.target.value)} maxLength={4}/>
                <input type={"text"} id={'name'} placeholder={"이름"} maxLength={4}
                       onChange={(e) => setName(e.target.value)}/>
                <button onClick={submit}>발급</button>
            </div>
            <p>
                한/영 전환은 Caps Lock 키를 눌러야 합니다.<br/>
                마우스 커서가 보이지 않는다면, <br/>
                마우스를 쭉 오른쪽으로 움직여보세요.
            </p>
            <div className={"show"}>
                <div className={"showNum"}>
                    {val == null ? "?" : val}
                </div>
                <p>
                    부스를 즐길 때 필요하니 꼭 외워 두세요!<br/>
                    게임에서 입력 받는 대부분의 번호는 <br/>
                    모두 이 인증 번호입니다!
                </p>
            </div>
        </div>
    );
}