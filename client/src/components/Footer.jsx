import './footer.css'
import {useSelector } from 'react-redux';

function Footer() {
    const name= useSelector ((state)=>state.user.name)
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Footer © {year}({name})
        </div>
    )
}

export default Footer