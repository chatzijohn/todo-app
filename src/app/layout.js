import SideNav from "@/components/SideNav"

export const metadata = {
  title: 'My app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  )
}
