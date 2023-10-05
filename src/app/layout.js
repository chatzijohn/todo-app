import SideNav from "@/components/SideNav"
import { Box } from "@mui/material"

export const metadata = {
  title: 'My app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: '0px'}}>
       <Box
        display="flex"
        width="100vw"
        height="100vh"
       >
          <SideNav />
          <Box flexGrow={1} >
            {children}
          </Box>
       </Box>
      </body>
    </html>
  )
}
