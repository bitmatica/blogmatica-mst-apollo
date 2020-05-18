import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/core"
import React from "react"

import SideNavContent from "./SideNavContent"

const MobileNav: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={["inline", null, "none"]}
        aria-label="Navigation Menu"
        fontSize="20px"
        variant="ghost"
        icon={(): JSX.Element => <Icon name="hamburger" />}
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
