import { FaTableCells } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import { BsPersonVideo } from "react-icons/bs";
import './TabList.css'
import { useState } from "react";
import PostProfile from "./PostProfile";

function TabList() {
    const [activeTab, setActiveTab] = useState(0);



return (
    <div>
        <div className='TabList-select'>
            <div style={{borderColor: activeTab === 0 ? '#fff' : '#363636', borderStyle: activeTab === 0 ? 'solid': 'dotted'}} className="TabList-select__item" onClick={() => setActiveTab(0)}>
                <div>
                    <FaTableCells/>
                </div>
            </div>
            <div style={{borderColor: activeTab === 1 ? '#fff' : '#363636', borderStyle: activeTab === 1 ? 'solid': 'dotted'}} className="TabList-select__item" onClick={() => setActiveTab(1)}>
                <div>
                    <BiMoviePlay/>
                </div>
            </div>
            <div style={{borderColor: activeTab === 2 ? '#fff' : '#363636', borderStyle: activeTab === 2 ? 'solid': 'dotted'}} className="TabList-select__item" onClick={() => setActiveTab(2)}>
                <div>
                    <BsPersonVideo/>
                </div>
            </div>
        </div>
        <div className='TabList-display'>
            <PostProfile/>
        </div>
    </div>
    )
}

export default TabList