import React, {Component} from "react";
import Header from "../Common/Header";
import img from "../assets/img/header-bg.jpg";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title = "Welcome to our studio"
                    subtitle = "It's nice to meet you"
                    buttonText = "Tell me more"
                    link = "/services"
                    showButton = {true}
                    image={img}
                />

                <Services/>
                <Portfolio/>
                <Timeline/>
                <Team/>
            </div>
        )
    }

}

export default Home;