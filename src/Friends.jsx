import Friend from './Friend'
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
    const [Friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='box'>
            <h2>Friends : {Friends.length}</h2>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}