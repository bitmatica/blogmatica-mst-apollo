import { Box, BoxProps, Spinner } from "@chakra-ui/core"
import React from "react"

export type LoadingContainerProps = BoxProps & {
  loading: boolean
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({
  loading,
  children,
  ...props
}) =>
  loading ? (
    <Box width="100%" textAlign="center" {...props}>
      <Spinner
        thickness="3px"
        speed="1s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  ) : (
    <>{children}</>
  )

export default LoadingContainer
