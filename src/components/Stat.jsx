import './Stat.css'

function Stat({countPublication=0, countFollower=0, countFollowing=0}) {

return (
    <div className='Stat'>
        <div className='Stat__item'>
            <div>{countPublication}</div>
            <div>Publicaciones</div>
        </div>
        <div className='Stat__item'>
            <div>
                {
                    countFollower <100000
                    ? countFollower
                    : 100000 < countFollower <1000000000
                        ? countFollower.toString().substring(0,1)+','+countFollower.toString().substring(1,2)+ ' Mil'
                        : (countFollower/1000).toFixed(0) + ' Mil'
                }
            </div>
            <div>Seguidores</div>
        </div>
        <div className='Stat__item'>
            <div>
                {
                    countFollowing <100000
                    ? countFollowing
                    : 100000 < countFollowing <1000000000
                        ? (countFollowing/1000).toFixed(0) + ' MIL'
                        : (countFollowing/1000).toFixed(0) + ' m'
                    
                    
                }
            </div>
            <div>Seguidos</div>
        </div>
    </div>
    )
}

export default Stat