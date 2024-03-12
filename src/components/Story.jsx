import HighlightedSaved from './HighlightedSaved'
import './Story.css'

function Story({data}) {

    
return (
    <div className='Story'>
        <HighlightedSaved data={data} />
    </div>
    )
}

export default Story