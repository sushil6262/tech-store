import React from 'react';
import Title from "../Title";

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row m-0">
                <div className="col-10 mx-auto col-md-6 my-3">
                <Title title="Contact Us"/>
                    <form className="mt-5" action="https://formspree.io/aadisrma26@gmail.com" method="POST">

                        <div className="form-group">
                            <input type="text" name="firstName" placeholder="Sushil Sharma" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="email@email.com" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="subject ! important !!!" className="form-control" />
                        </div>
                        <div className="form"><textarea name="message"  placeholder="hello buddy" rows="10" className="form-control"></textarea></div>
                        <div className="form-group mt-3">
                            <input type="submit" className="form-control bg-primary text-white" value="Send"/>
                        </div>
                    
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;