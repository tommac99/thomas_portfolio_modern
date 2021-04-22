import React, { FC } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import FastMarquee from "react-fast-marquee";

import { Container, Icon } from "./styles";
import { icons } from "./data";

export const Marquee: FC = () => {
  const matches = useMediaQuery("only screen and (max-width: 680px)");

  console.log("icons:", icons);

  return (
    <Container>
      <FastMarquee gradientWidth={0} speed={10}>
        {icons.map(({ icon, top, right, speed }, index) => {
          return (
            <Icon top={top} right={right} speed={speed} index={index}>
              {icon}
            </Icon>
          );
        })}
      </FastMarquee>
    </Container>
  );
};
