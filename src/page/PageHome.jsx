import UpperMenuSearch from './../components/UpperMenuSearch'
import LowerMenuIcons from './../components/LowerMenuIcons'
import Home from '../container/Home'
import './PageHome.css'

function PageHome() {

return (
    <div className='PageHome'>
        <UpperMenuSearch/>

        <Home/>
        <LowerMenuIcons/>
    </div>
    )
}

export default PageHome