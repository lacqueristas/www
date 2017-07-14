import {primary} from "@internal/colors"
import {dark} from "@internal/colors"
import {secondaryText} from "@internal/colors"

const interaction = {
  backgroundColor: "white",
  borderRadius: 3,
  borderStyle: "solid",
  borderWidth: 2,
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-block",
  fontFamily: "'Open Sans', sans-serif",
  height: "inherit",
  letterSpacing: ".1rem",
  lineHeight: "38px",
  textAlign: "center",
  textDecoration: "none",
  whiteSpace: "nowrap",
  width: "100%",
}

export const primaryInteraction = {
  ...interaction,
  color: dark,
  borderColor: primary,
  fontWeight: 600,
  paddingLeft: 30,
  paddingRight: 30,
  textTransform: "uppercase",
}

export const secondaryInteraction = {
  ...interaction,
  color: secondaryText,
  borderColor: secondaryText,
  borderWidth: 1,
}
