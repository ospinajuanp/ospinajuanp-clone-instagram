import './HighlightedSaved.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import UserThmbnail from './UserThmbnail'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function HighlightedSaved({data,story=true}) {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [maxScrollIndex, setMaxScrollIndex] = useState(0);
    const scrollAmount = 80; 
    const ulRef = useRef(null);

    useEffect(() => {
        if (ulRef.current) {
            const ulWidth = ulRef.current.offsetWidth;
            const maxIndex = Math.max(0, Math.ceil(ulWidth / 640) );
            setMaxScrollIndex(maxIndex);
        }
    }, [data]);

    const handleScrollLeft = () => {
        if (scrollIndex > 0) {
            setScrollIndex(scrollIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (scrollIndex < maxScrollIndex) {
            setScrollIndex(scrollIndex + 1);
        }
    };
return (
    <div className='HighlightedSaved'>
         <ul ref={ulRef} className='HighlightedSaved__cards' style={{ transform: `translateX(-${scrollIndex * scrollAmount}px)` }}>
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
            {/* <li className='HighlightedSaved__card'>
                        <div className='HighlightedSaved__card-img'>
                            <UserThmbnail/>
                        </div>
                        <div className='HighlightedSaved__card-title'>Nueva</div>
            </li> */}



        </ul>
        {
            story && (<div className='HighlightedSaved__arrow'>
            {
                scrollIndex > 0 &&   (
                    <div className='HighlightedSaved__arrow-left' onClick={handleScrollLeft}>
                        <IoIosArrowDropleftCircle/>
                    </div>
                )
            }
            {
                scrollIndex < maxScrollIndex &&   (
                    <div className='HighlightedSaved__arrow-right' onClick={handleScrollRight}>
                        <IoIosArrowDroprightCircle/>
                    </div>
                )
            }
                
        </div>)
        }
        
    </div>
    )
}

export default HighlightedSaved