import React from "react"
import Content from "./Content"
import Header from "./Header"
import SideNav from "./SideNav"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      <Content>{children}</Content>
    </>
  )
}

export default Layout
