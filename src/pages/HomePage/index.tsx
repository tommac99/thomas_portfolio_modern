import { FC } from "react";
import Lottie from "react-lottie";
import { Text, Projects, Marquee } from "../../components";
import { Container } from "./styles";
import linkedin from "../../assets/lottie/linkedin.json";
import github from "../../assets/lottie/github.json";
import { useMediaQuery } from "@react-hook/media-query";

export const HomePage: FC = () => {
  const matches = useMediaQuery("only screen and (max-width: 768px)");

  return (
    <Container>
      <div className="content">
        <Text variant={matches ? "h3" : "h1"} className="title">
          Thomas MacFarlaine
        </Text>
        <Text variant={matches ? "body1" : "h3"} className="subtitle" mt={10}>
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
