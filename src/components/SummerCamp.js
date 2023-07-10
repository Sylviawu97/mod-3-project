import React from 'react';
import Card from './SC-card';
import './SummerCamp.css'

const SummerCamp= () => {
    return (
        <div className="sec__one">
             <h2 className="main-title text-center">Fun SummerCamp for Teens</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Tech Mini Camp" img="" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SummerCamp
