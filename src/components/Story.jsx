import HighlightedSaved from './HighlightedSaved'
import './Story.css'

function Story() {

    const x = [
            {
                "picture":"https://unavatar.io/ospinajuanp",
                "description":"ospinajuanp"
            },
            {
                "picture":"https://unavatar.io/sooymav",
                "description":"sooymav"
            },
            {
                "picture":"https://unavatar.io/WestCOL_",
                "description":"WestCOL_"
            },
            {
                "picture":"https://unavatar.io/ArcangelPrrra",
                "description":"ArcangelPrrra"
            },
            {
                "picture":"https://unavatar.io/BlessdOficial",
                "description":"BlessdOficial"
            },
            {
                "picture":"https://unavatar.io/Bunny_oficial",
                "description":"Bunny_oficial"
            },
            {
                "picture":"https://unavatar.io/swfx_real",
                "description":"swfx_real"
            },
            {
                "picture":"https://unavatar.io/lunavid40033753",
                "description":"lunavid40033753"
            },
            {
                "picture":"https://unavatar.io/ospinajuanp",
                "description":"1"
            },
            {
                "picture":"https://unavatar.io/sooymav",
                "description":"2"
            },
            {
                "picture":"https://unavatar.io/WestCOL_",
                "description":"3"
            },
            {
                "picture":"https://unavatar.io/ArcangelPrrra",
                "description":"4"
            },
            {
                "picture":"https://unavatar.io/BlessdOficial",
                "description":"5"
            },
            {
                "picture":"https://unavatar.io/Bunny_oficial",
                "description":"6"
            },
            {
                "picture":"https://unavatar.io/swfx_real",
                "description":"7"
            },
            {
                "picture":"https://unavatar.io/lunavid40033753",
                "description":"8"
            },
        ]
return (
    <div className='Story'>
        <HighlightedSaved data={x} />
    </div>
    )
}

export default Story