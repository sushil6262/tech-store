import React, { Component } from 'react';
import styled from 'styled-components';
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            { id: 1, icon: <FaDolly />, title: 'free shipping', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, in!' },
            { id: 2, icon: <FaRedo />, title: '30 days return policy', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, in!' },
            { id: 3, icon: <FaDollarSign />, title: 'secured payment', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, in!' },
        ]
    }
    render() {
        const { services } = this.state
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">{services.map(item => {
                        return (
                            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3 key={item.id}">
                                <div className="service-icon">{item.icon}</div>
                                <div className="mt-3 text-capitalize">
                                    {item.title}
                                </div>
                                <div className="mt-3">{item.text}</div>
                            </div>
                        )
                    })}</div>
                </div>
            </ServicesWrapper>
        );
    }
}
const ServicesWrapper = styled.section`
    background:rgba(95,183,234,0.5);
    .service-icon{
        font-size:2.5rem;
        color:var(--primaryColor);
    }
    p{
        color:var(--darkGrey);
    }
`;

export default Services;