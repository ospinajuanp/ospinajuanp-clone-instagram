import { BiLinkAlt } from "react-icons/bi";
import './InfoProfile.css'

function InfoProfile({name='', type='',description='',url='', follower=[''], threads=''}) {
    
return (
    <div className='InfoProfile'>
        <div>{name}</div>
        {
            threads != '' 
            ?(
            <a href={threads} target="_blank" className="InfoProfile__threads">
                <div>{
                    threads.split('/')[threads.split('/').length - 1]
                    }</div>
            </a>
            )
            :''
        }
        {type != '' ? <div className="InfoProfile__type">{type}</div>: ''}
        {description != ''
            ?(
                <div className="InfoProfile__description">{
                    description.map((item, index) => {
                        return <span key={index}> {item} <br/></span> 
                    })
                }
                </div>
                )
            
            :''
        }
        {
            url != '' 
            ?(
            <a href={`https://${url}`} target="_blank" className="InfoProfile__web">
                <div><BiLinkAlt/></div>
                <div>{url}</div>
            </a>
            )
            :''
        }
        
        {
            follower.length != 0
            ?(
            <a href="#seguidores"  className='InfoProfile__url'>
                <div >{
                        follower.length <= 3 
                            ? <span>{follower.join(', ')}</span>
                            : <span>{follower.slice(0, 3).join(', ')} <span className="InfoProfile__url--more">y {follower.length - 3} mas siguen esta cuenta</span></span>
                        
                    }
                </div>
            </a>
            )
        :''
        }
    </div>
    )
}

export default InfoProfile