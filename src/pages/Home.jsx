import React from 'react'
import { Link } from 'react-router-dom';

function Home({data}) {
  console.log("home : " , data)
  
  const totalCount = data?.response?.body?.totalCount;
  console.log("totalCount : ", totalCount)

  return (
    <div className='home'>
      {
        // data &&
        //   <p>totalCount : {totalCount}</p>
        
        data && data.response.body.items.map((items , i) => {
          return (
            <div className='items' key={i}>
              <p>{items.districtName}</p>
              <p>{items.dataDate}</p>
              <Link to={`detail/${i}`} >자세히 보기</Link>
            </div>
          )
        })
      }

    </div>
    
  )
}

export default Home