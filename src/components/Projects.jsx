import React from 'react';
import { Container, Row, Col, Card, CardText } from 'react-bootstrap';

const Projects = () => {
    return (
        <section id="projects" className="py-5">
            <Container>
                <h2 className="text-center mb-4">Education</h2>
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Bachelor of Technology</Card.Title>
                                <Card.Subtitle>Computer Science and Engineering</Card.Subtitle>
                                <CardText>Indian Institute of Technology Patna</CardText>
                                <CardText>CPI: 7.65(Current)</CardText>
                                <CardText>2022 - 2026(Expected)</CardText>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Senior Secondary School</Card.Title>
                                <Card.Subtitle>PCM</Card.Subtitle>
                                <CardText>JNV Jagdalpur</CardText>
                                <CardText>Percentage: 94.8%</CardText>
                                <CardText>2022</CardText>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Secondary School</Card.Title>
                                <Card.Subtitle>All Subjects</Card.Subtitle>
                                <CardText>JNV Jagdalpur</CardText>
                                <CardText>Percentage: 94.2%</CardText>
                                <CardText>2019</CardText>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Add more projects as needed */}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
