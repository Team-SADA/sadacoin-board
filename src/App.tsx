import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';

interface UserData {
    id: string
    name: string
    coin: number
}

const reward: string[] = [
    '뚜레쥬르 사르르 샤샤핑 케이크',
    '맘스터치 싸이버거 세트',
    '지류문화상품권 5000원',
    '오양갈비만두(냉동) 2팩(12개)',
    '짜파게티 범벅(소) + 참깨라면(대)'
]

function App() {
    const [board, setBoard] = useState<UserData[]>([]);

    useEffect(() => {
        axios.get('https://sada.ziho.kr/coin/show').then((result) => {
            // console.log(result.data);
            setTimeout(() => setBoard(result.data), 2000);
        }).catch(() => {});
    }, [board]);

    return (
        <div className="App">
            <div className="background-image"></div>
            <h1>
                SADA Coin
                <img src={"./coin.png"} alt={"coin"}/>
                Top 10
            </h1>
            <p>
                부스 종료 시 상위 5명에게는 경품이 주어집니다!<br/>
                또한, 코인을 내고 작은 선물을 받아갈 수 있습니다.
            </p>
            <table>
                <tbody>
                <tr>
                    <th>순위</th>
                    <th>학번</th>
                    <th>이름</th>
                    <th>코인</th>
                    {/*<th className={"reward"}>상품</th>*/}
                </tr>
                {board.map((line, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{line.id}</td>
                        <td>{line.name}</td>
                        <td>{line.coin}<img src={"./coin.png"} alt={"coin"}/></td>
                        {/*<td className={"reward"}>{index < 5 ? reward[index] : ''}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
