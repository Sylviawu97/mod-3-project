import React from 'react';
import Card from './SC-card'
import './SummerCamp.css'

const SummerCamp= () => {
    return (
        <div className="sec__one">
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Introduction to Python Programming and Machine Learning" img="https://thumbs.dreamstime.com/b/tech-camp-children-vr-technologies-design-educational-course-learning-programming-engineering-meta-universe-summer-279457070.jpg" text="   Machine Learning, Data Science, and the use of Artificial Intelligence technologies is growing rapidly in our society. Just a few applications include self-driving cars, personal assistants, product recommendations, robotics, data analysis, and web searching. These applications typically involve self-learning systems that are trained based on large amounts of data and the integration of “intelligence” based on algorithms. In this course, students will be introduced to programming in Python, the language of Machine Learning, and to one of the most common applications in Machine Learning, the image classifier. Students will create a basic image classifier using the Google Teachable Machine tool and integrate it into an application framework, both in a web page, and on a Raspberry Pi platform." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="An exciting teen hackathon" img="https://www.shutterstock.com/image-vector/tech-camp-children-computer-science-260nw-2306476999.jpg" text="At our hackathon, we invite you to unleash your creativity. It's your chance to explore uncharted territories, think outside the box, and bring your wildest ideas to life.Collaborate with like-minded peers and gain new perspectives as you work together to solve real-world problems." />
                    </div>
                
                </div>
            </div>
        </div>
        </div>
    )
}

export default SummerCamp
