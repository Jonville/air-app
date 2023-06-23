import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'

function App() {
  // 불어올 데이터
  const [data, setData] = useState(null);
  const API_KEY = 'i6ue%2BKfSPbFNvRPp%2FOXAc7sBjIKApVjFWq9JZA3lVyWtWrJNV61fQd8B9TTbrtl6hxpwNcCxVizLI4G%2Fq7hapA%3D%3D';
  const API_URL = `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${API_KEY}&returnType=json&numOfRows=10&pageNo=1&year=2023&itemCode=PM10`;
  
  const fetchData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      
  }

  // 맨 뒤에 [] 가 있으면 시작할때만 실행됨
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className='App'>
      <h1>미세먼지를 알아보자</h1>
      <BrowserRouter>
        <Nav />
        {/* <button onClick={fetchData}>요청</button>  */}
        <Routes>
          <Route path='/' element={<Home data={data}/>} />
          <Route path='/detail/:id' element={<Detail data={data}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
