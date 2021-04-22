import React from "react";
import Lottie from "react-lottie";
import { Navigation, Text, Projects, Marquee } from "../../components";
import { Container } from "./styles";
import linkedin from "../../assets/lottie/linkedin.json";
import github from "../../assets/lottie/github.json";

export const HomePage = () => {
  return (
    <Container>
      {/* <Navigation /> */}
      <div className="content">
        <Text variant="h1" className="title">
          Thomas MacFarlaine
        </Text>
        <Text variant="h4" className="subtitle" mt={10}>
          Fullstack Developer
        </Text>
        <div className="links">
          <a href="https://github.com/tommac99" className="link">
            <Lottie
              height={40}
              width={40}
              options={{
                autoplay: true,
                loop: true,
                animationData: github,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-macfarlaine/"
            className="link linkedin"
          >
            <Lottie
              height={32}
              width={32}
              options={{
                autoplay: true,
                loop: true,
                animationData: linkedin,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </a>
        </div>
      </div>
      <div className="projects">
        <Projects />
      </div>
      <Marquee />
    </Container>
  );
};
