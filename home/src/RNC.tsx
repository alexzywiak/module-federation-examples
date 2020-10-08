import React from "react";
import { DateTime } from "luxon";
import { ReviewWorkflow } from "@ps-flow/flow-rnc";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 24px;
  color: white;
`;

const PRBarChartBaseDate = DateTime.fromISO("2020-08-13T12:00:00Z");
const PR_BAR_CHART_DATE_RANGE = {
  start: PRBarChartBaseDate.toJSDate(),
  end: PRBarChartBaseDate.plus({ days: 10 }).toJSDate(),
};
const team = { id: 0, recordType: "VIRTUAL_TEAM" };
const repo = { _base: "all" } as any;
const dateRange = PR_BAR_CHART_DATE_RANGE;
const includeNested = true;
const prStatus = "open";

const RNC = () => {
  return (
    <Container>
      <ReviewWorkflow
        team={team}
        repo={repo}
        dateRange={dateRange}
        includeNested={includeNested}
        prStatus={prStatus}
      />
    </Container>
  );
};

export default RNC;
