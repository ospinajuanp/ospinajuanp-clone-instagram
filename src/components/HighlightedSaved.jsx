import './HighlightedSaved.css'
import UserThmbnail from './UserThmbnail'

function HighlightedSaved() {

return (
    <div className='HighlightedSaved'>
        <ul className='HighlightedSaved__cards'>
            <li className='HighlightedSaved__card'>
                <div className='HighlightedSaved__card-img'>
                    <UserThmbnail user={'ospinajuanp'}/>
                </div>
                <div className='HighlightedSaved__card-title'>TikToks</div>
            </li>
            <li className='HighlightedSaved__card'>
                <div className='HighlightedSaved__card-img'>
                    <UserThmbnail user={'ospinajuanp'}/>
                </div>
                <div className='HighlightedSaved__card-title'>Preguntas</div>
            </li>
        </ul>
    </div>
    )
}

export default HighlightedSaved