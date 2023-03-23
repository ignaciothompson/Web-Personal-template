import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {

    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_vybzsfc', 
            'template_q3o1lgt', 
            refForm.current, 
            'xKRMeWQEzMco-t7mN'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, try again')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['C','o','n','t','a','c','t',' ','m','e',]}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm interested in a job opportunity where I can grow as a developer and as a person, I live in Uruguay but I'm willing to relocate if necessary. 
                    I'm also open to any freelance opportunities.
                </p>
                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
                </div>
            </div>
        </div>
        <Loader type='ball-grid-pulse'/>
        </>
    )

}


export default Contact