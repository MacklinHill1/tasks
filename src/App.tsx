import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import batcat from "./batcat.png";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <div className="red-rectangle">First Column</div>
                        <div
                            style={{ width: 100, backgroundColor: "red" }}
                            id="rectangle"
                        ></div>
                    </Col>
                    <Col>
                        <div className="red-rectangle">Second Column</div>
                    </Col>
                </Row>
            </Container>
            <header className="App-header">
                <h1>
                    Macklin Hill UD CISC275 with React Hooks and TypeScript
                    Hello World!
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>The worlds longest concert lasted 453 hours</li>
                <li>It is impossible to hum while holding your nose.</li>
                <li>Japan has one vending machine for every 40 people.</li>
            </ul>
            <img src={batcat} alt="batcat" />;
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
