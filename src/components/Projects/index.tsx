import React, { FC, useEffect, useState } from "react";
import { useScrollContext } from "../../hooks";
import { Link, animateScroll as scroll } from "react-scroll";
import profileImage from "../../assets/images/profile.jpg";
import { useMediaQuery } from "@react-hook/media-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container } from "./styles";
import { Text } from "../Text";
import { Project } from "../Project";
import Lottie from "react-lottie";
import left from "../../assets/lottie/left.json";
import right from "../../assets/lottie/right.json";
import { Carousel } from "react-responsive-carousel";
import { projects } from "./data";

export const Projects: FC = () => {
  const matches = useMediaQuery("only screen and (max-width: 680px)");

  return (
    <Container>
      <div className="carousel-container">
        <Carousel
          onChange={(index, item) => {
            console.log("index:", index);
            console.log("item:", item);
          }}
          swipeable={true}
          // infiniteLoop={true}
          interval={3000}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow left-arrow"
              >
                <Lottie
                  height={40}
                  width={40}
                  options={{
                    autoplay: true,
                    loop: false,
                    animationData: left,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow right-arrow"
            >
              <Lottie
                height={40}
                width={40}
                options={{
                  autoplay: true,
                  loop: false,
                  animationData: right,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </button>
          )}
        >
          {projects.map((item) => {
            return (
              <div className="project-slide">
                <Project item={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};
