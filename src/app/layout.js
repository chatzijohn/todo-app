import SideNav from "@/components/SideNav"
import { Box } from "@mui/material"

export const metadata = {
  title: 'My app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: '0px', minHeight: "100vh"}}>
       <Box 
        display="flex"
        width="100%"
        height="100%"
        justifyContent="space-around"
       >
          <SideNav />
          <Box flexGrow={1}>
            {children}
          </Box>
       </Box>
      </body>
    </html>
  )
}
