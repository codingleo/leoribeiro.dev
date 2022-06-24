import { ThemeProvider } from "@chakra-ui/react"
import { FC } from "react"
import { theme } from "./theme"

export const CustomThemeProvider: FC<{children: any}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}