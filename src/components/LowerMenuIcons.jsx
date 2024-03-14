import { GoHome } from "react-icons/go";
import { TiCompass } from "react-icons/ti";
import { MdOutlineAddBox } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './LowerMenuIcons.css'

function LowerMenuIcons() {
    return (
        <div className="LowerMenuIcons">
            <ul>
                <div className="LowerMenuIcons__navigator">
                    <li className="LowerMenuIcons__logoInsta">
                        <a href="/" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="noopener noreferrer">
                            <GoHome />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="noopener noreferrer">
                            <TiCompass />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="noopener noreferrer">
                            <BiMoviePlay />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="noopener noreferrer">
                            <MdOutlineAddBox />
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="noopener noreferrer">
                            <IoPaperPlaneOutline />
                        </a>
                    </li>
                    <li className="LowerMenuIcons__heart">
                        <a href="/" rel="noopener noreferrer">
                            <FaRegHeart />
                        </a>
                    </li>
                    <li>
                        <a href="/profile/ospinajuanp" rel="noopener noreferrer">
                            <img className='photoProfile' src="https://unavatar.io/ospinajuanp" alt="ospinajuanp" />
                        </a>
                </li>
                </div>
                
            </ul>
        </div>
    )
}
export default LowerMenuIcons