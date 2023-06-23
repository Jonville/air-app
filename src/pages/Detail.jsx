import React from 'react'
import { useParams } from 'react-router-dom'

function Detail({data}) {

  const params = useParams();
  console.log("detail : " , params)
  console.log("detail : " , data)

  return (
    <div className='detail'>Detail Page
      <h2>상세페이지</h2>
      <p>데이터 : {params.id}</p>
      <p>날짜 : {data.response.body.items[params.id].issueDate}</p>
      <p>위치 : {data.response.body.items[params.id].districtName}</p>
      <p>이동경로 : {data.response.body.items[params.id].moveName}</p>
      <p>issue : {data.response.body.items[params.id].issueGbn}</p>
    </div>
  )
}

export default Detail