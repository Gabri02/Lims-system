import { Nav, Navbar} from 'react-bootstrap';

function Header() {
    return (
                <Navbar style={{ backgroundColor: '#0A192F', height: '15vh' }}>
                    <Navbar.Brand className='ms-3'>
                        <h1 className='d-inline-block align-middle text-white'>Sample<span style={{color: '#CF704A'}}>Sentry</span></h1>
                    </Navbar.Brand>
                    <Nav className='ms-auto me-4'>
                        <Nav.Link style={{color: '#CF704A'}}>
                            Options
                        </Nav.Link>
                        <Nav.Link style={{color: '#CF704A'}}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar>
    )
}

export default Header;