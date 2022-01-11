import './App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Homepage() {
    return(
        <header className="App-header">
      <Container>
    <Row>
    <Col>
    <h1>Your privacy is important to us.</h1>
    </Col>
    </Row>
    <Row>
      <Col>
      <h4 className='subheading'>That's why we have these policies in place.</h4>
      </Col>
    </Row>
    <tr></tr>
    <Row>
      <Col>
      <p className='subheading2'>Click on the dropdown menu in the top right to view our policies and terms, and for our respective partners.</p>
      </Col>
    </Row>
  </Container>
      </header>
    )
}

export default Homepage;