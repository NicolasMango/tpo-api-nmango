import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Resume resumeData={resumeData} />
                <Portfolio resumeData={resumeData} />
                <ContactUs resumeData={resumeData} />
                <Footer resumeData={resumeData} />
            </React.Fragment>
        );
    }
}