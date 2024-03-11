import HighlightedSaved from "../components/HighlightedSaved"
import InfoProfile from "../components/InfoProfile"
import Header from "./../components/Header"
import Stat from "../components/Stat"
import TabList from "../components/TabList"
import './Profile.css'



function Profile({dataTest}) {
    
    return (
        <div className="Profile">
            <Header data={dataTest}/>
            <InfoProfile name={dataTest.name} type={dataTest.type} description={dataTest.description} url={dataTest.url} follower={dataTest.follower} threads={dataTest.threads}/>
            <HighlightedSaved data={dataTest.highlights} story={false}/>
            <Stat countPublication={dataTest.publications.length} countFollower={dataTest.followers} countFollowing={dataTest.seguidos}/>
            <TabList publications={dataTest.publications} reels={dataTest.reels} tag={dataTest.tag}/>
        </div>
    )
}
export default Profile