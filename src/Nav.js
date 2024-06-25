import {Link} from 'react-router-dom'

function Nav(prop1){
    return(
        <div className='myNav'>
            <div className='first'><h2>{prop1.name}</h2></div> 
            <div className='second'>
                <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/About">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/Contact">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            
            
            </div>
            
        </div>
    )
}
export default Nav
