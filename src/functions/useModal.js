import React from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const useModal = (e) => {
  const { handleImage } = React.useContext(GlobalStateContext);

  return handleImage(e);
};

export default useModal;
