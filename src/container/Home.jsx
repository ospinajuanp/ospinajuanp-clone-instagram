import Feed from '../components/Feed'
import Story from '../components/Story'
import './Home.css'

function Home() {

return (
    <div className='Home'>
        <Story/>
        <Feed/>
    </div>
    )
}

export default Home