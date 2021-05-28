import React from "react";
import GatsbyImage from "./common/ImageGatsby";
import styled from "styled-components";
import handleHexToRgba from "../functions/handleHexToRgba";
 import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill";
import handleBlockScroll from "../functions/handleBlockScroll";
import useOutsideClick from "../functions/useOutsideClick";

const Overlay = styled.div`
  position: fixed;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => handleHexToRgba(props.colors.background, 0.7)};
  animation: 0.2s fade;
`;
const ImgWrapper = styled.div`
  display: flex;
  margin: 0 10px;

  @media screen and (min-width: 768px) {
    max-width: 60%;
    max-height: 80%;
    margin-top: 60px;
    padding: 0;
  }
`;
const ContentWrapper = styled.div`
  box-shadow: 3px 5px 7px ${() => handleHexToRgba("#333", 0.4)};
`;
const CloseIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  z-index: 20;
  cursor: pointer;
  position: absolute;
  top: 80px;
  right: 0;
  margin-right: 1rem;
  color: ${(props) => props.colors.primary};

  svg {
    color: ${(props) => props.colors.primary};
    font-size: 1.8rem;

    :hover {
      color: ${(props) => props.colors.secondary};
    }
  }
`;

const Modal = ({
  image,
  alt,
  setOpen,
  open,
  rounded,
  colors = { background: "#333", primary: "#333", secondary: "#fff" },
}) => {
  let wrapperRef = React.useRef("modal");
  useOutsideClick(wrapperRef, handleClose);

  // Block scroll on open
  React.useEffect(() => {
    open && handleBlockScroll(open);
  }, [open]);
  //

  function handleClose() {
    setOpen(false);

    // Unblock scroll on close
    handleBlockScroll(false);
  }

  return (
    <Overlay  colors={colors}>
      <CloseIcon onClick={handleClose} colors={colors}>
        <RiCloseFill /> 
      </CloseIcon>
      <ImgWrapper id="modal" ref={wrapperRef}>
        <ContentWrapper duration={300}>
          <GatsbyImage
            rounded={rounded}
            image={image}
            alt={alt}
            forceheight="true"
          />
        </ContentWrapper>
      </ImgWrapper>
    </Overlay>
  );
};

export default Modal;
