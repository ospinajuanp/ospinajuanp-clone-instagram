import HighlightedSaved from "../components/HighlightedSaved"
import InfoProfile from "../components/InfoProfile"
import Stat from "../components/Stat"
import TabList from "../components/TabList"
import Header from "./../components/Header"
import './Profile.css'

function Profile() {
    return (
        <div className="Profile">
            <Header/>
            <InfoProfile/>
            <HighlightedSaved/>
            <Stat/>
            <TabList/>
        </div>
    )
}
export default Profile