import { IoLogoInstagram } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import './UpperMenuSearch.css'

function UpperMenuSearch() {

return (
    <div className='UpperMenuSearch'>
        <div className="UpperMenuSearch__lef">
            <a href="/">
                <IoLogoInstagram />
            </a>
        </div>
        <div className="UpperMenuSearch__right">
            <div className="upperMenuSearch__right-search">
                <a href="/">
                    <CiSearch />
                </a>
                <div>Buscar</div>
            </div>
            <a className="upperMenuSearch__right-heart">
                <FaRegHeart />
            </a>
        </div>
    </div>
    )
}

export default UpperMenuSearch