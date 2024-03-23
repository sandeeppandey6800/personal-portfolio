import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id='skills'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>As a student at our esteemed university, I have honed various skills essential for academic and professional success. These include critical thinking, effective communication, research proficiency, problem-solving abilities, teamwork, adaptability, time management, leadership, and technological competency.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Blog Post</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-image-left" >
                <img src={colorSharp} alt="Image" />
            </div>
        </section>
    )
};