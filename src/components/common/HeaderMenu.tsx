import { Image, Menu, MenuButton, MenuList } from "@chakra-ui/core"
import React from "react"
import { UserModelType } from "../../models"

export type HeaderMenuProps = {
  currentUser: UserModelType
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ currentUser, children }) => {
  return (
    <Menu>
      <MenuButton>
        <Image
          rounded="full"
          size="38px"
          src={currentUser.profileImageUrl}
          alt="User profile"
        />
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  )
}

export default HeaderMenu
