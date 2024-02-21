import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = React.useState([])
    const data = useLoaderData();

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Nitish1604")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [] )
  return (
    <div className='bg-gray-600 text-white text-xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" width={100} />
    </div>
  )
}

export default Github

export const getGithubInfo= async () => {
    const response = await fetch("https://api.github.com/users/Nitish1604")
    return response.json()
}
