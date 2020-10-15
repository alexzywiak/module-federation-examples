import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  colorsBackgroundDark,
  colorsTextIcon,
} from "@pluralsight/ps-design-system-core";
import Theme from "@pluralsight/ps-design-system-theme";
import styled from "styled-components";
import { DateTime, Interval } from "luxon";

import "@pluralsight/ps-design-system-normalize/dist/index.css";

// @ts-ignore
const Nav = React.lazy(() => import("monolith/Nav"));
// @ts-ignore
const BCTwo = React.lazy(() => import("bcTwo/BCTwo"));
// @ts-ignore
const BCThree = React.lazy(() => import("bcThree/BCThree"));
// @ts-ignore
const ReviewWorkflow = React.lazy(() => import("flowRnc/ReviewWorkflow"));

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
const DateRange = Interval.fromDateTimes(
  DateTime.local().minus({ days: 7 }),
  DateTime.local()
);
const App = () => {
  return (
    <Theme name={Theme.names.dark}>
      <BrowserRouter>
        <Page>
          <Suspense fallback={null}>
            <Nav />
          </Suspense>
          <Content>
            <Route path="/rnc">
              <Suspense fallback={null}>
                <ReviewWorkflow
                  dateRange={{
                    start: DateRange.start.toJSDate(),
                    end: DateRange.end.toJSDate(),
                  }}
                />
              </Suspense>
            </Route>
            <Route path="/bctwo">
              <Suspense fallback={null}>
                <BCTwo />
              </Suspense>
            </Route>
            <Route path="/bcthree">
              <Suspense fallback={null}>
                <BCThree />
              </Suspense>
            </Route>
          </Content>
        </Page>
      </BrowserRouter>
    </Theme>
  );
};

export default App;