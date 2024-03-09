import { BiLinkAlt } from "react-icons/bi";
import './InfoProfile.css'

function InfoProfile() {

return (
    <div className='InfoProfile'>
        <div>Juan Pablo Ospina Restrepo</div>
        <div>Usuario</div>
        <div>Cuenta Principal
        <br /> Unica Cuenta</div>
        <div className="InfoProfile__web">
            <div><BiLinkAlt/></div>
            <div>www.facebook.com/ospinajuanp</div>
        </div>
        <a className='InfoProfile__url'>
            <div href="/">valeriamontoya.02, sara.arangoo, apg_04 y 19 más siguen esta cuenta</div>
        </a>
    </div>
    )
}

export default InfoProfile