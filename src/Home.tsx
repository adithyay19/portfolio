import { Container, Stack } from "react-bootstrap"
// import htmlGif from "./Components/Html.gif";

export default function Home() {
    return(
        <Container fluid className="home border-rounded">
            <div className="hstack gap-3 justify-content-evenly">

            {/* <img src={htmlGif} style={{width: "40px"}}/> */}
            <div className="vr"></div>
            <h1 className="Typewriter">Hi, I am Adithya Prasanth</h1>      
            </div>
        </Container>
    );
}