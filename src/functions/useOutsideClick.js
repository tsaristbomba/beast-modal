import { useEffect } from "react";

function useOutsideClick(ref, action) {
  ref === undefined &&
    console.error("ref is not reachable | useOutsideClick hook");
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
}

export default useOutsideClick;
