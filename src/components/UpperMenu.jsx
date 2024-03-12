import { MdKeyboardArrowLeft } from "react-icons/md";
import './UpperMenu.css'

function UpperMenu( {name} ) {
    return (
        <div className="UpperMenu">
            <a href="/">
                <MdKeyboardArrowLeft/>
            </a>
            <a href="/profile">
                <h2>{name}</h2>
            </a>
        </div>
    )
}

export default UpperMenu