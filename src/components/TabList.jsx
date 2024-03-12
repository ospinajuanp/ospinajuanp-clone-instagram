import { FaTableCells } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import { BsPersonVideo } from "react-icons/bs";
import './TabList.css'
import { useState } from "react";
import PostProfile from "./PostProfile";

function TabList({publications,reels,tag}) {
    const [activeTab, setActiveTab] = useState(0);
return (
    <div>
        <div className='TabList-select'>
            <a style={{borderColor: activeTab === 0 ? '#fff' : '#363636', borderStyle: activeTab === 0 ? 'solid': 'dotted'}} className="TabList-select__item" onClick={() => setActiveTab(0)}>
                <div>
                    <FaTableCells style={{fill: activeTab === 0 ? '#0095F6' : '#A8A8A8'}}/>
                </div>
            </a>
            <a style={{borderColor: activeTab === 1 ? '#fff' : '#363636', borderStyle: activeTab === 1 ? 'solid': 'dotted'}} className="TabList-select__item" onClick={() => setActiveTab(1)}>
                <div>
                    <BiMoviePlay style={{fill: activeTab === 1 ? '#0095F6' : '#A8A8A8'}}/>
                </div>
            </a>
            <a style={{borderColor: activeTab === 2 ? '#fff' : '#363636', borderStyle: activeTab === 2 ? 'solid': 'dotted'}} className="TabList-select__item" onClick={() => setActiveTab(2)}>
                <div>
                    <BsPersonVideo style={{fill: activeTab === 2 ? '#0095F6' : '#A8A8A8'}}/>
                </div>
            </a>
        </div>

        {
            activeTab === 0 
            ? <div className='TabList-display'><PostProfile publications={publications}/></div>
            : activeTab === 1 
                ? <div className='TabList-display'><PostProfile publications={reels} reels={true}/></div>
                : activeTab === 2 
                    ? <div className='TabList-display'><PostProfile publications={tag}/></div>
                    : ''
        }
        
    </div>
    )
}

export default TabList