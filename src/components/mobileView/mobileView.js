import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
const MobileView = () => {

    return (
        <div className="mobileView">
            <div className="header">
                <div className='navbar'>
                    <img src="https://cdn.shopify.com/s/files/1/0068/1423/6742/files/Bolt_IoT_Final_Logo_-14_150x.png?v=1614291866" alt="logo" />
                    <span style={{ background: 'white' }}>
                        <img src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" alt="hamburger" style={{ width: '30px' }} />
                    </span>
                </div>

                <h2>BOLT TRAININGS</h2>
                <p>
                    <strong>
                        Learn In-demand Skills with Hands-On Projects<br />
                        Excellent for Beginners + Earn Certificate + Internship Assistance
                    </strong>
                </p>
            </div>
            <div className="mid-section">
                <h3>TRAININGS WITH HARDWARE KIT:</h3>
                <div className="image">
                    <img src="https://cdn.shopify.com/s/files/1/0068/1423/6742/files/IoTandMLKit.png?v=11178592816735417471" alt="img" className='image2' />
                    <h4>Internet of Things and Machine Learning</h4>
                    <p>Rs. 9,600.00</p>
                </div>
            </div>
            <div className="middle">
                <h3>SOFTWARE TRAININGS WE OFFER:</h3>
                <div className="container">
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0068/1423/6742/files/Web_Development-01.png?v=6964928158248095502" alt="" />
                        <h3>Web Development Training</h3>
                        <p>Rs. 8,600.00</p>
                    </div>
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0068/1423/6742/files/Shopify_Landing_Page_Product_Images_191a31cb-a99e-4625-a8c7-a2bd6ddbe7d5.png?v=1978221356084869438" alt="" />
                        <h3>Python Programming Training</h3>
                        <p>Rs. 8,600.00</p>
                    </div>
                </div>
            </div>
            <div className="last-section">
                <div className='image'>
                    <img src=" https://cdn.shopify.com/s/files/1/0068/1423/6742/files/HackSpaceMag11_1_360x.jpg?v=1614297154" alt="" />
                </div>
                <div className='para'>
                    <h3>Learn from Award Winning Industry Experts</h3>
                    <p>All our trainings are taught by engineers and software developers with more than 10 years of industry experience.</p>
                    <h4 style={{color:'#949494',padding:'10px',textAlign:'left'}}>Awards and Recognition</h4>
                    <p>
                    <strong>1. </strong>We were amongst the startups that<strong>accompanied Prime Minister Narendra Modi</strong> to the Silicon Valley and were showcased at the first Indo-U.S. Startup Konnect in September 2015.<br />
                    <strong>2. Winner</strong> of the DST Lockheed Martin India Innovation Growth program 2016<br />
                    <strong>3. Winner </strong>of the Economic Times Power of Ideas 2016<br />
                        The Bolt IoT and ML Platform was featured by Raspberry Pi as the best maker hardware in 2018.
                    </p>
                    <button style={{ color: 'white', background: ' #557b97', border: 'none', padding: '10px', margin: '20px auto', width: 'fit-content' }}>KNOW MORE</button>
                </div>
            </div>
            <div className="footer" style={{ background: '#000', padding: '30px', color: 'white', width: '100vw' }}>
                <div>
                    <h3 style={{textAlign:'left' , marginLeft:0}}>Address</h3>
                    <p style={{marginBottom:'30px'}}>79, 11th Cross Rd, Binnamangala<br />
                        Indiranagar, Bengaluru<br />
                        Karnataka 560038,India</p>
                    <p>
                        <span><FontAwesomeIcon icon={faPhone} /></span> (+91) 8881197198<br />
                        <span><FontAwesomeIcon icon={faEnvelope} /></span> support@boltiot.com
                    </p>
                </div>
                <div>
                    <h3 style={{textAlign:'left' , marginLeft:0}}>Refund Policy:</h3>
                    <p>Refund within 10 days of delivery</p>
                    <h3 style={{textAlign:'left' , marginLeft:0}}>Important links:</h3>
                    <p>About us<br />
                        Privacy Policy<br />
                        Terms of service<br />
                        Career<br />
                        Bolt Cloud<br />
                        Resources for Students</p>
                </div>

            </div>
        </div>
    );
}

export default MobileView;