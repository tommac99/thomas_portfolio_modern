import React, { FC, useEffect, useState } from "react";
import { useScrollContext } from "../../hooks";
import { Link, animateScroll as scroll } from "react-scroll";
import profileImage from "../../assets/images/profile.jpg";
import { useMediaQuery } from "@react-hook/media-query";

import { Container } from "./styles";
import { Text } from "../Text";

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("only screen and (max-width: 680px)");

  return <Container></Container>;
};
