import React, { Dispatch, SetStateAction } from "react";

import GatsbyImage from "./common/ImageGatsby";
import styled, { StyledProps } from "styled-components";
import handleHexToRgba from "../functions/handleHexToRgba";
import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill";
import handleBlockScroll from "../functions/handleBlockScroll";
import useOutsideClick from "../functions/useOutsideClick";

// Types
type ModalProps = {
  image: object;
  alt: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  rounded: boolean;
  colors: { background: string; primary: string; secondary: string };
  duration?: number;
  ref?: boolean;
};

type StyledTypes = StyledProps<{
  colors?: { background: string; primary: string; secondary: string };
}>;

// Styled components
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
  background: ${(props: StyledTypes) =>
    handleHexToRgba(props.colors.background, 0.7)};
  animation: 0.2s fade;
`;
const ImgWrapper = styled.div<{ ref: any }>`
  display: flex;
  margin: 0 10px;

  @media screen and (min-width: 768px) {
    max-width: 60%;
    max-height: 80%;
    margin-top: 60px;
    padding: 0;
  }
`;
const ContentWrapper = styled.div<{ duration: number }>`
  box-shadow: 3px 5px 7px ${() => handleHexToRgba("#333", 0.4)};
`;
const CloseIcon = styled.button<StyledTypes>`
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
  color: ${(props: StyledTypes) => props.colors.primary};

  svg {
    color: ${(props: StyledTypes) => props.colors.primary};
    font-size: 1.8rem;

    :hover {
      color: ${(props: StyledTypes) => props.colors.secondary};
    }
  }
`;

const Modal: React.FC<ModalProps> = ({
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
    <Overlay
      colors={{
        background: colors.background,
        primary: colors.primary,
        secondary: colors.secondary,
      }}
    >
      <CloseIcon
        onClick={handleClose}
        colors={{
          background: colors.background,
          primary: colors.primary,
          secondary: colors.secondary,
        }}
      >
        <RiCloseFill />
      </CloseIcon>
      <ImgWrapper id="modal" ref={wrapperRef}>
        <ContentWrapper duration={300}>
          <GatsbyImage rounded={rounded} image={image} alt={alt} forceheight />
        </ContentWrapper>
      </ImgWrapper>
    </Overlay>
  );
};

export default Modal;
