import React, { useContext } from "react";
import { IncrementContext } from "./IncrementContext";

interface WithIncrementContextProps {
  renderProps: (props: {
    count: number;
    increment: () => void;
    decrement: () => void;
  }) => React.ReactNode;
}
const WithIncrementContext = ({ renderProps }: WithIncrementContextProps) => {
  const context = useContext(IncrementContext);
  return renderProps(context);
};

export default WithIncrementContext;
