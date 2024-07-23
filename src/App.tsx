import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Board from "./components/board";
import Issue from "./components/Issue";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Board/>}/>
                <Route path="/issue" element={<Issue/>}/>
            </Routes>
        </BrowserRouter>
    );
}
