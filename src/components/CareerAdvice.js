import React from 'react'
import "./CareerAdvice.css"
import Card from './SC-card'

const CareerAdvice = () => {
    return (
        <div className="sec__one">
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Mock Interview" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfXadxcInsMdj46ssnFR6Nt77nP6LZyI3AQ&usqp=CAU" text="Our mock interview service helps individuals:

Practice and refine their interview skills: By participating in mock interviews, individuals can practice answering common interview questions, learn effective techniques for structuring their responses, and refine their overall interview performance.
Gain confidence: Mock interviews provide a safe environment to practice and build confidence in handling challenging interview situations, reducing anxiety and boosting self-assurance.
Receive personalized feedback: Our experts provide valuable feedback on areas that need improvement, highlighting strengths and suggesting strategies to overcome weaknesses.
Learn industry-specific interview techniques: Our professionals have industry knowledge and can guide candidates on industry-specific interview techniques, ensuring they are well-prepared for job interviews in their desired field."/>
                   
                   </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Mentorship" img="https://www.cis-spain.com/en/wp-content/uploads/sites/3/2021/06/mentoring-program-CIS-university.jpeg" text="At our hackathon, we invite you to unleash your creativity. It's your chance to explore uncharted territories, think outside the box, and bring your wildest ideas to life.Collaborate with like-minded peers and gain new perspectives as you work together to solve real-world problems." />
                    </div>
                
                </div>
            </div>
        </div>
        </div>
    )
}

export default CareerAdvice
