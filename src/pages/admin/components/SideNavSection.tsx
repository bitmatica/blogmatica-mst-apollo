import { Box, BoxProps, Collapse, Flex, Icon, Text } from "@chakra-ui/core"
import React from "react"

type SideNavSectionProps = BoxProps & {
  title: string
}

export const SideNavSection: React.FC<SideNavSectionProps> = ({
  title,
  children,
  ...props
}) => {
  const [show, setShow] = React.useState(true)
  const handleToggle = (): void => setShow(!show)

  return (
    <Box borderBottomWidth="1px" borderColor="whiteAlpha.400" {...props}>
      <Flex
        onClick={handleToggle}
        p="4"
        color="whiteAlpha.600"
        fontWeight="bold"
        fontSize="sm"
        letterSpacing="wide"
        cursor="pointer"
      >
        <Text textTransform="uppercase" width="100%">
          {title}
        </Text>
        <Icon name={show ? "chevron-up" : "chevron-down"} size="5" />
      </Flex>
      <Collapse isOpen={show} pb="4">
        {children}
      </Collapse>
    </Box>
  )
}
