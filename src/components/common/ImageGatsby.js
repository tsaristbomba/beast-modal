import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import handleHexToRgba from "../../functions/handleHexToRgba";
// import useFilterImage from "../../functions/useFilterImage";

const Img = styled(GatsbyImage)`
  width: ${({ small }) => (small ? "150px !important" : "100% !important")};
  height: ${({ small, forceheight }) =>
    small ? "150px !important" : forceheight ? "100% !important" : "auto"};
  animation: 0.2s fade;
  overflow: hidden;
  max-height: ${({ wide }) => (wide ? "600px" : "none")};
  border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
  box-shadow: ${({ shadow }) =>
    shadow
      ? "rgba(17, 17, 26, 0.2) 0px 1px 0px, rgba(17, 17, 26, 0.2) 0px 8px 24px, rgba(17, 17, 26, 0.2) 0px 16px 48px !important"
      : "none"};

  div {
    justify-content: center;
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    height: ${({ small, forceheight }) =>
      small ? "150px !important" : forceheight ? "100% !important" : "auto"};
    margin: 0 !important;
  }

  img {
    width: ${({ small }) => (small ? "150px !important" : "100%")};
    height: ${({ small, forceheight }) =>
      small ? "150px !important" : forceheight ? "100% !important" : "auto"};
    margin: 0 auto;
    align-self: center;
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    max-height: ${({ wide }) => (wide ? "600px" : "none")};
    transition: opacity 0.25s linear, transform 0.2s ease !important;

    :hover {
      transform: ${({ scale }) => (scale ? "scale(1.1)" : "none")};
    }
  }
  /* max-width: 100%; */

  @media screen and (min-width: 768px) {
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    cursor: ${({ cursor }) => (cursor ? "pointer" : "auto")};
    /* box-shadow: ${({ shadow }) =>
      shadow
        ? `0px 2px 50px 0px ${handleHexToRgba("#333", 0.3)} !important`
        : "none"}; */

    /* max-height: ${({ limit }) => (limit ? "350px !important" : "100%")}; */

    img {
      max-width: ${({ wide }) => (wide ? "55vw !important" : "none")};
      margin: 0;
    }
  }
`;

const Image = ({
  onClick,
  rounded,
  image,
  cursor,
  shadow,
  alt,
  small,
  layout,
  wide,
  forceheight,
}) => {
  return (
    <Img
      onClick={onClick}
      image={image}
      alt={alt}
      rounded={rounded}
      cursor={cursor}
      shadow={shadow}
      small={small}
      layout={layout}
      wide={wide}
      forceheight={forceheight}
    />
  );
};

export default Image;
