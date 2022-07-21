import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { base_url } from '../../../baseURL';

export default function Contact_main() {
    const settingData = useSelector(state => state.sliceData.settings);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [comments, setComments] = useState('');
    const [message, setMessage] = useState('');

    const addSendData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            comments: comments
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };
        
        fetch(`${base_url}/contacts`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.status === "success"){
                setMessage('Message sent successfully');
                setTimeout(() => {
                    setMessage('');
                }
                , 3000);
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-4 pe-0">
                    <div className="map">
                        <iframe height="100%" width="100%" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1653207088526!5m2!1sen!2sin"  style={{border:'0px'}} loading="lazy" ></iframe>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8 footer-form-bg d-flex align-items-center">
                    <div className="footer-form">

                     
                            <div className="row">

                                <div className="col-md-6 ">
                                    <div className="mb-3">
                                        <label className="">Your Name*</label>
                                        <input type="text" className="" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="mb-3">
                                        <label className="">Your Email*</label>
                                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="">Your Subject*</label>
                                        <input type="text" className="" value={subject} onChange={e => setSubject(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-5 ">

                                    <label >Comments</label>
                                    <textarea className="" value={comments} onChange={e => setComments(e.target.value)}></textarea>

                                </div>


                            </div>

                            <button className="btn-send" onClick={addSendData}>Send</button>
                            <br/> <br/>
                            <div className="text-success">{message}</div>
   
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="abt-welcome-txt p-60">

                        <p className="mt-3">Our team of specialists is always here for you. Ready to help with any questions that
                            you need answering to.

                        </p>
                        <div className="heading-box phone d-flex">
                            <div className="review-icon pt-2"><i className="fa-solid fa-phone"></i></div>
                            <div>
                                <div className="contact-desc">
                                    <h6>Phone</h6>
                                    <p><Link onClick={() => window.location = `tel:${settingData[10]?.value}`} to="">{settingData[10]?.value}</Link></p>

                                </div>
                            </div>
                        </div>
                        <div className="heading-box address d-flex">
                            <div className="review-icon pt-2"><i className="fa-solid fa-location-dot"></i></div>
                            <div>
                                <div className="contact-desc">
                                    <h6>Address</h6>
                                    <p>{settingData[11]?.value}</p>

                                </div>
                            </div>
                        </div>
                        <div className="heading-box Email d-flex">
                            <div className="review-icon pt-2"><i className="fa-solid fa-envelope"></i></div>
                            <div>
                                <div className="contact-desc">
                                    <h6>Email</h6>
                                    <p><Link  onClick={() => window.location = `mailto:${settingData[12]?.value}`} to="">{settingData[12]?.value}</Link></p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
</div>
            </>
            )
}
