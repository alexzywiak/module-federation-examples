import React, { createContext, useCallback, useContext, useState } from "react";

export const IncrementContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const IncrementContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);

  return (
    <IncrementContext.Provider value={{ count, increment, decrement }}>
      {children}
    </IncrementContext.Provider>
  );
};

export default IncrementContextProvider;
