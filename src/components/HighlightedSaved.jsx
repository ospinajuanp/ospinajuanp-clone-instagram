import './HighlightedSaved.css'
import Photo from './Photo'

function HighlightedSaved() {

return (
    <div className='HighlightedSaved'>
        <ul className='HighlightedSaved__cards'>
            <li className='HighlightedSaved__card'>
                <div className='HighlightedSaved__card-img'>
                    <Photo user={'ospinajuanp'}/>
                </div>
                <div className='HighlightedSaved__card-title'>TikToks</div>
            </li>
            <li className='HighlightedSaved__card'>
                <div className='HighlightedSaved__card-img'>
                    <Photo user={'oficial_mav1'}/>
                </div>
                <div className='HighlightedSaved__card-title'>Preguntas</div>
            </li>
        </ul>
    </div>
    )
}

export default HighlightedSaved