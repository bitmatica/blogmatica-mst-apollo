import React from "react";

interface LoadingContainerProps {
  loading: boolean;
}

const LoadingContainer: React.FunctionComponent<LoadingContainerProps> = ({
  loading,
  children,
}) => (loading ? <div>Loading...</div> : <div>{children}</div>);

export default LoadingContainer;
