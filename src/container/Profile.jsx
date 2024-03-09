import HighlightedSaved from "../components/HighlightedSaved"
import InfoProfile from "../components/InfoProfile"
import Stat from "../components/Stat"
import Header from "./../components/Header"
import './Profile.css'

function Profile() {
    return (
        <div className="Profile">
            <Header/>
            <InfoProfile/>
            <HighlightedSaved/>
            <Stat/>
        </div>
    )
}
export default Profile