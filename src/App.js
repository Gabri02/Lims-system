import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';
import Footer from './components/footer';
import {Row, Col } from 'react-bootstrap';

function App() {
    return (
        <>
                <Row className='m-0'>
                    <Col className='p-0'><Header /></Col>
                </Row>
                <Row className='m-0'>
                    <Col lg={2} className='p-1'><Aside /></Col>
                    <Col lg={10} className='p-1'><Main /></Col>
                </Row>
                <Row className='m-0'>
                    <Col className='p-0'><Footer /></Col>
                </Row>
        </>
    )
}
export default App;