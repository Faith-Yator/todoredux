import { useContext } from 'react'
import './sidenav.css'
import { FaUserTie } from 'react-icons/fa'
import { AiFillFileAdd } from 'react-icons/ai'
import { TfiViewListAlt } from 'react-icons/tfi'
import { Context } from "../context/todoContext/Context";
import { useSelector } from 'react-redux'

export default function Sidenav() {
    const name= useSelector ((state)=>state.user.name)
    const { dispatch } = useContext(Context);
    const handleAdd = () => {
        dispatch({ type: "ADD", payload: 'add' })
    }
    const handleView = () => {
        dispatch({ type: "ADD", payload: 'view' })
    }
    const handleProfile = () => {
        dispatch({ type: "PROFILE", payload: 'profile' })
    }
    return (
        <div className='sidenav'>
            <div className="sidenav_wrapper">
                <div className="sidenav_title" onClick={handleProfile}><FaUserTie className='icon' /> Profile ({name})</div>
            </div>
            <div className="sidenav_wrapper">
                <div className="sidenav_item" onClick={handleAdd}><AiFillFileAdd className='icon2' />Add Todo</div>
                <div className="sidenav_item" onClick={handleView}><TfiViewListAlt className='icon2' />View Todo</div>
            </div>

        </div>
    )
}