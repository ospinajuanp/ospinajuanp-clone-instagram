import { MdKeyboardArrowLeft } from "react-icons/md";
import './UpperMenu.css'

function UpperMenu( {name} ) {
    return (
        <div className="UpperMenu">
            <MdKeyboardArrowLeft/>
            <a href="/">
                <h2>{name}</h2>
            </a>
        </div>
    )
}

export default UpperMenu