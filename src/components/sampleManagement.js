import { Col, Row } from 'react-bootstrap';
import Location from './location';
import Filter from './filter';

function SampleManagement() {
    return (
        <>
            <Row className="m-0" style={{ backgroundColor: '#0A192F' }}>
                <Col className="p-0 " style={{ alignItems: 'center', display: 'flex' }}>
                    <p className="me-auto ms-1 text-white mb-0" style={{ display: 'inline' }}>Sample Management</p>
                </Col>
                <Col><Location /></Col>
            </Row>
            <Row className="m-0">
                <Filter />
            </Row>
        </>
    )
}

export default SampleManagement;