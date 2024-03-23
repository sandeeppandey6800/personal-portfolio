import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => Math.max(prevDelta / 2, 50)); // Ensure delta doesn't go below 50
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Sandeep Pandey`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                            <p> Web developer with a focus on results and a passion for creating interactive, user-friendly websites and enhancing comprehension of web development. Currently seeking opportunities to apply my expertise in supporting innovative web development.</p>
                            <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div>
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
