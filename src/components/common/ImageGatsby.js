import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Img = styled(GatsbyImage)`
  width: ${({ small, width }) =>
    small ? "150px !important" : `${width} !important`};
  height: ${({ small, forceheight, height }) =>
    small ? "150px !important" : forceheight ? `${height} !important` : "auto"};
  animation: 0.2s fade;
  overflow: hidden;
  max-height: ${({ wide }) => (wide ? "600px" : "none")};
  border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
  box-shadow: ${({ shadow }) =>
    shadow
      ? "rgba(17, 17, 26, 0.2) 0px 1px 0px, rgba(17, 17, 26, 0.2) 0px 8px 24px, rgba(17, 17, 26, 0.2) 0px 16px 48px !important"
      : "none"};
  /* margin: 0 auto !important; */

  div {
    justify-content: center;
    border-radius: ${({ rounded }) => (rounded ? "4px !important" : "0")};
    height: ${({ small, forceheight, height }) =>
      small
        ? "150px !important"
        : forceheight
        ? `${height} !important`
        : "auto"};
    /* margin: 0 auto !important; */
  }

  img {
    width: ${({ small, width }) =>
      small ? "150px !important" : `${width} !important`};
    height: ${({ small, forceheight, height }) =>
      small
        ? "150px !important"
        : forceheight
        ? `${height} !important`
        : "auto"};
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

    img {
      max-width: ${({ wide }) => (wide ? "55vw !important" : "none")};
      /* margin: 0; */
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
  width = "100%",
  height = "100%",
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
      width={width}
      height={height}
      style={{ margin: "0 auto !important" }}
    />
  );
};

export default Image;
