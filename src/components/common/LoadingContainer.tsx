import React from "react";
import { Spinner } from "@chakra-ui/core";

interface LoadingContainerProps {
  loading: boolean;
}

const LoadingContainer: React.FunctionComponent<LoadingContainerProps> = ({
  loading,
  children,
}) =>
  loading ? (
    <Spinner thickness="3px" speed="1s" emptyColor="gray.200" color="blue.500" size="xl" />
  ) : (
    <div>{children}</div>
  );

export default LoadingContainer;
