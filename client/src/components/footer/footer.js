import './footer.css';

import footerPhoto from '../../img/footer.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={footerPhoto} alt="footer" className='footerPhoto'/>
        </div>
    )
    
}

export default Footer;