import React from "react";

const FallbackHeader = React.lazy(() =>
  import("@ps-flow/flow-rnc").then((module) => ({
    default: module.ReviewWorkflow,
  }))
);
// @ts-ignore
const Header = React.lazy(() => import("flowRnc/ReviewWorkflow"));

type FederatedModuleProps = {
  [k: string]: any;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  FallbackComponent: React.LazyExoticComponent<React.ComponentType<any>>;
};

class FederatedModule extends React.Component<
  FederatedModuleProps,
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    const { Component, FallbackComponent, ...rest } = this.props;
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback report</div>}>
          <FallbackComponent {...rest} />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Report loading</div>}>
        <Component {...rest} />
      </React.Suspense>
    );
  }
}

export default FederatedModule;
