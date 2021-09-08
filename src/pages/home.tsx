import React from 'react';
import Header from "../components/header";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Features from "../components/features";
import Contact from "../components/contact";
import Team from "../components/team";
import Footer from "../components/footer";

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Pricing />
            <Features />
            <Contact />
            <Team />
            <Footer />
        </React.Fragment>
    );
}
export default Home;
