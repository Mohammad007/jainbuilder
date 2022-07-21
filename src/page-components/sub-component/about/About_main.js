import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { base_url } from '../../../baseURL'
import { aboutweareData, teamAddData, testimonialAddData } from '../../../redux/sliceData/sliceData'

export default function About_main() {

    const dispatch = useDispatch()

    useEffect(() => {
        // Team Function
        ;(async () => {
            const response1 = await fetch(`${base_url}/team`)
            const data1 = await response1.json()
            dispatch(teamAddData(data1.teamMembers))

        // Testimonials Function
            const response2 = await fetch(`${base_url}/testimonials`)
            const data2 = await response2.json()
            dispatch(testimonialAddData(data2.testimonials))

        // about we are
        const response3 = await fetch(`${base_url}/getaboutweare`);
        const data3 = await response3.json();
        dispatch(aboutweareData(data3.aboutweare));
        })()
    },[])

    const teamMembers = useSelector(state => state.sliceData.team)
    const testimonials = useSelector(state => state.sliceData.testimonials)
    const aboutweare = useSelector(state => state.sliceData.aboutweare)

    return (
        <>
            <section className="about-bg pt-140 pb-140 ">

                <div className="overlay-white"></div>
                <div className="container over-cont">

                    <div className="abt-welcome-txt">
                        <h6>a little about ourselves</h6>
                        <h4>About Us</h4>
                        <p className="mt-3">Our team of specialists is always here for you. Ready to help with any questions that
                            you need answering to.
                        </p>
                    </div>
                    <div className="row">
                        {teamMembers?.map((member, index) => (
                        <div className="col-md-4 p-4" key={index}>
                            <a className="img-hov" href="">
                                <div className="team-pic">
                                    <img width="100%" src={member.image ? member.image : "assets/Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"} alt="" />
                                </div>
                            </a>
                            <div className="team-txt text-center">
                                <h4>{member.name}</h4>
                                <p>{member.position}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <!-- video section starts --> */}

            <section className="video-bg">
                <div className="video-container">
                    <video type="video/mp4"  src="assets/Images/pexels-kindel-media-7577733.mp4" className="video" autoPlay loop muted/>
                        {/* <source type="video/mp4" /> */}
                    {/* </video> */}
                </div>
                <div className="container test-co pt-100 pb-100">
                    <div className="reviews">
                        <div className="heading-box d-flex">
                            <div className="review-icon"><i className="pt-3 fa-solid fa-user"></i></div>
                            <div>
                                <div className="review-txt">
                                    <h6>a word from our clients</h6>
                                    <h4>Testimonials</h4>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-30">
                        {testimonials?.map((testimonial, index) => (
                        <div className="col-md-6 mb-20" key={index}>
                            <div className="testimonial-box border-light">
                                <div className="review-txt text-center">
                                    <p>{testimonial.message}</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="profile-pic">
                                        <img src={testimonial.logo ? testimonial.logo : "assets/Images/pic.jpg"} alt="" />
                                    </div>
                                    <div className="profile-detail pt-2 ps-2">
                                        <h6>{testimonial.name}</h6>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>
                <div className="color-overlay"></div>
            </section>
            {/* <!-- video section ends --> */}


            {/* <!-- panaroma starts --> */}
            <section className="slider-sec">
                <div className="row">
                    <div className="col-lg-5 my-auto">
                        <div className="welcome-txt px-90">

                            <h4>{aboutweare?.title}</h4>
                            <p className="mt-3">{aboutweare?.content}</p>
                        </div>
                    </div>
                    <div className="col-lg-7 mb-0 pe-0">
                        {/* <!-- Banner links starts here --> */}

                        <div className="abt-img-cont">
                            <img src="assets/Images/here.jpg" alt="" />
                        </div>

                        {/* <!-- banner links ends here --> */}
                    </div>
</div>
            </section>
            {/* <!-- Panaroma ends --> */}
        </>
    )
}
