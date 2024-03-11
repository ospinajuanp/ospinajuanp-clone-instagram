import { MdKeyboardArrowLeft } from "react-icons/md";
import './UpperMenu.css'

function UpperMenu(  ) {
    return (
        <div className="UpperMenu">
            <MdKeyboardArrowLeft/>
            <a href="/">
                <h2>ospinajuanp</h2>
            </a>
        </div>
    )
}

export default UpperMenu