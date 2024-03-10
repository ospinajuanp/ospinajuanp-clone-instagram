import { RiArrowDownSLine } from "react-icons/ri";
import { GoPersonAdd } from "react-icons/go";
import UserThmbnail from "./UserThmbnail";
import './Header.css'

function Header () {
    return (
        <header className='Header'>
            <div className="Header__img">
                <UserThmbnail className="Header__img-svg" user={'ospinajuanp'}/>
            </div>
            <div className="Header__text">
                <div>ospinajuanp</div>
                <div className="Header__buttons">
                    <button className="Header__follow">
                        <span>Siguiendo</span>
                        <div>
                            <RiArrowDownSLine />
                        </div>
                    </button>
                    <button className="pTz">Enviar Mensaje</button>
                    <button className="pIz">
                        <GoPersonAdd />
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header