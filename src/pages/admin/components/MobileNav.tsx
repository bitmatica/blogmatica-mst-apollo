import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/core"
import { Box } from "@chakra-ui/core/dist"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

import SideNavContent from "./SideNavContent"

const MobileNav: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={["inline", null, "none"]}
        aria-label="Navigation Menu"
        variant="ghost"
        icon={(): JSX.Element => <Box as={GiHamburgerMenu} size="24px" margin="auto" />}
        onClick={onToggle}
      />

      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0} bg="primary">
            <SideNavContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNav
