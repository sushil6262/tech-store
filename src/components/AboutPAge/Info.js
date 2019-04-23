import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className="py-5">
            <div className="conatiner">
                <div className="row m-0">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img style={{background:"var(--primaryColor)"}} src={aboutBcg} className="img-fluid img-thumbnail"alt="About Company"/>
                        
                        </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about us"/>
                    <p className="text-lead text-muted my-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem assumenda atque nam hic sint nemo placeat unde, dolorum numquam.
                    </p>
                    <p className="text-lead text-muted my-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem assumenda atque nam hic sint nemo placeat unde, dolorum numquam.
                    </p>
                    <button className="main-link" type="button" style={{marginTop:"2rem"}}>More Info</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Info;