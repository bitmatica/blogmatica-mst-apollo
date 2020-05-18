import { PseudoBoxProps } from "@chakra-ui/core"

export const sharedCellProps: PseudoBoxProps = {
  textAlign: "left",
  fontWeight: 400,
  verticalAlign: "middle",
  padding: "2",
  _first: {
    pl: "4",
  },
  _last: {
    pr: "4",
  },
}
