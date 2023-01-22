import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>The full passage of standard Lorem Ipsum copy is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-itens-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab second</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab third</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return (<ProjectCard key={index} {...project}/>)
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">lorem ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">lorem ipsum</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
