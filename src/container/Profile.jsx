import HighlightedSaved from "../components/HighlightedSaved"
import InfoProfile from "../components/InfoProfile"
import Header from "./../components/Header"
import './Profile.css'

function Profile() {
    return (
        <div className="Profile">
            <Header/>
            <InfoProfile/>
            <HighlightedSaved/>
        </div>
    )
}
export default Profile