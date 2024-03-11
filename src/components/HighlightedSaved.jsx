import './HighlightedSaved.css'
import UserThmbnail from './UserThmbnail'

function HighlightedSaved({data}) {

return (
    <div className='HighlightedSaved'>
        <ul className='HighlightedSaved__cards'>
            {
                data.map((item,index)=>{
                    return (<li key={index} className='HighlightedSaved__card'>
                        <div className='HighlightedSaved__card-img'>
                            <UserThmbnail url={item.picture}/>
                        </div>
                        <div className='HighlightedSaved__card-title'>{item.description}</div>
                    </li>
                    )
                })
            }
            <li className='HighlightedSaved__card'>
                        <div className='HighlightedSaved__card-img'>
                            <UserThmbnail/>
                        </div>
                        <div className='HighlightedSaved__card-title'>Nueva</div>
            </li>



        </ul>
    </div>
    )
}

export default HighlightedSaved