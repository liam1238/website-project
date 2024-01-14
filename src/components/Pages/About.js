import React, {Component} from "react";
import Header from "../Common/Header";
import aboutImg from "../assets/img/about.jpeg";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";

class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title = "About us"
                    subtitle = "It's a really great story"
                    showButton = {false}
                    image={aboutImg}
                />
                <Timeline/>
                <Team/>
            </div>
        )
    }

}

export default About;