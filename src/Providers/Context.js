import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
  useRef,
} from "react";

import { useHistory } from "react-router-dom";

const newContext = createContext({});

const Context = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const history = useHistory();
  const ref = useRef(null);

  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return history.listen(() => {
      if (open && window.innerWidth < 1024) {
        setOpen(false);
      }
    });
  }, [history, open]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!ref.current.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, ref]);

  return (
    <newContext.Provider value={{ toggle, open, ref, theme, setTheme }}>
      {children}
    </newContext.Provider>
  );
};

export function useToggle() {
  return useContext(newContext);
}

export default Context;
