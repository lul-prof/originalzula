import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './ContactComponent.css'
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa'
import toast from 'react-hot-toast'

const ContactComponent = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault()
        toast.success("Wait Please!!!")
        try {
            ""
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <>
    
        <section className="contact" id='contact'>
            {/*-----------------------*/}
            <div className="contact-left">
                <div className="contact-left-top">
                    <div className="contact-left-top-left">
                        <h1>GET IN</h1>
                        <h1 className='text-gray-600'>TOUCH</h1>
                    </div>
                    <div className="contact-left-top-right">
                        <img  className='grayscale brightness-0 animate-pulse' src={assets.contactImage} alt="message-img" fetchPriority='auto' referrerPolicy='no-referrer'/>
                    </div>
                </div>
                <div className="contact-left-mid">
                    <h5 className='text-gray-600'>FOR BOOKINGS & INQUIRIES</h5>
                    <h4 className='cursor-pointer hover:text-gray-500 transition-colors'><FaEnvelope width={24} height={24}/>bookings@originalzula.com</h4>
                </div>
                <div className="contact-left-bottom border-gray-200">
                    <h5 className='text-gray-600'>FOLLOW THE MOVEMENT</h5>
                    <ul>
                        <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"}>
                            <li className='cursor-pointer hover:text-gray-500 transition-colors'>INSTAGRAM</li>
                        </Link>
                        <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"}>
                            <li className='cursor-pointer hover:text-gray-500 transition-colors'>TIKTOK</li>
                        </Link>
                        <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"}>
                            <li className='cursor-pointer hover:text-gray-500 transition-colors'>YOUTUBE</li>
                        </Link>
                        <Link to={"https://youtube.com/@originalzula?si=Yh_Qrbr4HpzWMrOo"}>
                            <li className='cursor-pointer hover:text-gray-500 transition-colors'>FACEBOOK</li>
                        </Link>
                    </ul>
                </div>
            </div>
            {/*-------------------------*/}
            <div className="contact-right shadow-black/5 border-gray-100">
                <form onSubmit={handleSubmit} method='post'>
                    <div className="form-class-small">
                        <div className="form-class">
                            <label className='tracking-widest text-gray-600' htmlFor="name">NAME</label>
                            <input className='focus:ring-2 focus:ring-black transition-all ' type="text" name="name" placeholder='Your Name' />
                        </div>
                        <div className="form-class">
                            <label className='tracking-widest text-gray-600' htmlFor="name">EMAIL</label>
                            <input className='focus:ring-2 focus:ring-black transition-all ' type="text" name="email" placeholder='Your Email' />
                        </div>
                    </div>
                    <div className="form-class">
                        <label className='tracking-widest text-gray-600' htmlFor="subject">SUBJECT</label>
                        <input className='focus:ring-2 focus:ring-black transition-all ' type="text" name="subject" placeholder='What is this about?' />
                    </div>
                    <div className="form-class">
                        <label className='tracking-widest text-gray-600' htmlFor="message">MESSAGE</label>
                        <textarea className='focus:ring-2 focus:ring-black transition-all ' name="message" rows={5} placeholder='Your message here...'></textarea>
                    </div>
                    <div className="form-btn">
                        <button>SEND MESSAGE <FaTelegramPlane/></button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default ContactComponent