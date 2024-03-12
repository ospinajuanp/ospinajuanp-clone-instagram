import './Publication.css'
import UserThmbnail from './UserThmbnail'
import { CiMenuKebab } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";

function Publication({data}) {
    
return (
    <div className='Publication'>
        <div className='Publication__header'>
            <a href={`/profile/${data.username}`} className='Publication__header-img'>
                <UserThmbnail url={data.url}/>
            </a>
            <div className='Publication__header-text'>
                <div className='Publication__header-text-name'>
                    <div>
                        {data.username}
                    </div>
                    <div>
                        1 d
                    </div>
                </div>
                <div className='Publication__header-text-audio'>
                    
                </div>
            </div>
            <div className='Publication__header-menu'>
                <CiMenuKebab />
            </div>
        </div>
        <div className='Publication__body'>
            <img src={data.photo} alt="" />
            {/* <img src="https://www.hostelworld.com/blog/wp-content/uploads/2017/09/the-globbers-2.jpg" alt="" /> */}
            {/* <img src="https://www.hostelworld.com/blog/wp-content/uploads/2017/09/florabaker.jpg" alt="" /> */}
        </div>
        <div className='Publication__footer'>
            <div className='Publication__footer-interaction'>
                <div className='Publication__footer-interaction-publication'>
                    <div>
                        <FaRegHeart/>
                    </div>
                    <div>
                        <FaRegComment/>
                    </div>
                    <div>
                        <IoPaperPlaneOutline/>
                    </div>
                </div>
                <div className='Publication__footer-interaction-save'>
                    <div>
                        <CiSaveDown2 />
                    </div>
                </div>
            </div>
            <div className='Publication__footer-stats'>
                <span>{data.likes.toLocaleString('es-ES')}</span><span> Me gusta</span>
            </div>
            <div className='Publication__footer-description'>
                <div>{data.username}</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis dicta a, molestias in ad! Quas, deleniti aperiam, accusamus eos, eveniet voluptates praesentium necessitatibus odio tempora recusandae quaerat cum animi.</div>
            </div>
            <div className='Publication__footer-trad'>
                <span>Ver  traducción</span>
            </div>
            <div className='Publication__footer-comments'>
                <span>Ver los {data.comments.length} comentarios</span>
            </div>
            <div className='Publication__footer-add-comment'>
                <span>Agregar un comentario</span>
            </div>
        </div>


    </div>
    )
}

export default Publication