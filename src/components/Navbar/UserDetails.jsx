import { useEffect, useState} from 'react'
import { useMatch, useParams } from 'react-router-dom'

const UserDetails = () => {

    const [user, setuser] = useState({
      username:"Guest",
      email:""
    }
    )
    const para=useParams()
      const match=useMatch("/profile/:username")
    
    const fetch_data= async ()=>{
      if(match)
        {
          try{
          let r= await fetch(`http://localhost:3000/profile/${para.username}`)
          const res = await r.json()
          console.log("User-details",res)
          setuser({username:res.username,email:res.email})
        }catch{
          console.log("Error fetching User-details ")
        }
      }
    }

    useEffect(() => {
      fetch_data()
    },[match])
    

  return (
    <>
    <div className="ml-3">
        <div className="text-base font-medium leading-none text-white">{user.username}</div>
        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
    </div>
    </>
    )
}

export default UserDetails