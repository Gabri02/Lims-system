import { Nav, Accordion, Container } from "react-bootstrap";

function Aside() {
    return (
        <Container className="p-0" style={{ border: '2px solid #404040' }}>
            <Container className="p-1" style={{ height: '75.1vh' }}>
                <Nav className="flex-column" activeKey="/link" >
                    <Nav.Item style={{ backgroundColor: '#0A192F', color: '#f2f2f2' }}>
                        <p style={{ display: 'inline', marginLeft: '9px' }}>Home</p>
                    </Nav.Item>
                    <Nav.Item className="m-2">
                        <Accordion>
                            <Accordion.Header>
                                Samples
                            </Accordion.Header>
                            <Accordion.Body className="p-0" style={{ backgroundColor: 'grey' }}>
                                Sample management
                            </Accordion.Body>
                        </Accordion>
                        <Nav.Item className="mt-1" style={{ backgroundColor: '#404040', color: '#f2f2f2' }}>
                            <Nav.Link className="p-0 text-white" eventKey="link-event-key">
                                Preferences
                            </Nav.Link>
                        </Nav.Item>
                    </Nav.Item>
                </Nav>
            </Container>
        </Container>
    )
}

export default Aside;