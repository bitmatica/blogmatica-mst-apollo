import { Box, BoxProps, Collapse, Flex, Icon, Text, useDisclosure } from "@chakra-ui/core"
import React from "react"

type SideNavSectionProps = BoxProps & {
  title: string
}

export const SideNavSection: React.FC<SideNavSectionProps> = ({
  title,
  children,
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure(true)

  return (
    <Box borderBottomWidth="1px" borderColor="whiteAlpha.400" {...props}>
      <Flex
        onClick={onToggle}
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
        <Icon name={isOpen ? "chevron-up" : "chevron-down"} size="5" />
      </Flex>
      <Collapse isOpen={isOpen} pb="4">
        {children}
      </Collapse>
    </Box>
  )
}
