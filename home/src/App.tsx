import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  colorsBackgroundDark,
  colorsTextIcon,
} from "@pluralsight/ps-design-system-core";
import Theme from "@pluralsight/ps-design-system-theme";
import styled from "styled-components";
import RNC from "./RNC";
import BCTwo from "./BCTwo";
import Nav from "./Nav";

const Page = styled.div`
  background-color: ${colorsBackgroundDark[1]};
  color: ${colorsTextIcon.highOnDark};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 0 24px;
`;

const App = () => {
  return (
    <Theme name={Theme.names.dark}>
      <BrowserRouter>
        <Page>
          <Nav />
          <Content>
            <Route path="/rnc">
              <Suspense fallback={null}>
                <RNC />
              </Suspense>
            </Route>
            <Route path="/bctwo">
              <Suspense fallback={null}>
                <BCTwo />
              </Suspense>
            </Route>
          </Content>
        </Page>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
