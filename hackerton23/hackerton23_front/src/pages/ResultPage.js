import Header from '../components/Header';
import Footer from '../components/Footer';
import BodyRes from '../components/BodyRes';
import './ResultPage.scss'

const Result = (props) => {
    return (
        <div className='Result'>
            <Header/>
            <BodyRes/>
            <Footer/>
        </div>
    )
}

export default Result;