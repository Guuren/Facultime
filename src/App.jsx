import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationMenu from './components/NavigationMenu';
import InputForm from './components/InputForm';

export default function App() {
  return (
    <div className="min-vh-100 d-flex flex-column text-dark" style={{ backgroundColor: '#f3f4f6' }}>
      <NavigationMenu />

      <main className="flex-grow-1 py-5">
        <Container id="home">
          <Row className="justify-content-center align-items-center g-4">
            <Col lg={6}>
              <div className="pe-lg-4">
                <h1 className="display-5 fw-bold text-black mb-3" style={{ letterSpacing: '-0.025em' }}>
                  Streamline Your Academic Consultations
                </h1>
                <p className="fs-5 text-black mb-4" style={{ fontWeight: 500, lineHeight: '1.6' }}>
                  Welcome to <strong className="text-black">Facultime</strong>. Book verified one-on-one consultation slots with faculty members quickly, transparently, and accessibly.
                </p>
                <Card className="border border-2 border-dark shadow-sm p-4 bg-white mb-4 rounded">
                  <h4 className="fw-bold text-black mb-2">Accessibility Commitment</h4>
                  <p className="text-black mb-0 fw-medium">
                    This portal is built following strict WAI-ARIA guidelines, guaranteeing high color contrast (exceeding WCAG AAA standards), full keyboard navigation support, and semantic screen-reader markup.
                  </p>
                </Card>
              </div>
            </Col>
            
            <Col lg={6} id="consultation">
              <InputForm />
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-auto border-top border-secondary">
        <Container>
          <p className="mb-0 fw-semibold">© {new Date().getFullYear()} Facultime Portal. Built with React 19 & Accessible UI Guidelines.</p>
        </Container>
      </footer>
    </div>
  );
}