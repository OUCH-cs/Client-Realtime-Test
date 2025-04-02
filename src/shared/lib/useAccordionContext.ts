import { useContext } from "react";
import { AccordionContext } from "../services";

const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "useAccordionContext must be used within a AccordionProvider"
    );
  }
  return context;
};

export { useAccordionContext };
