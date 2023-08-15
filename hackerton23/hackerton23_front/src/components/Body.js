import './Body.scss';

const Main = ({children}) =>{
    return(
        <div className='body'>
            <div className='app-introd'>
                <h3>Free website for verifying commercial posts</h3>
            </div>
            <div className='app-title'>
                <h1><a>광고성 글</a>만</h1>
                <h1>빠르게 골라내다</h1></div>
            <div className='content'>{children}</div>

    </div>
    )
}

export default Main;