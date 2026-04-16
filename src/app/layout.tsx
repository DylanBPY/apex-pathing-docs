import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'Apex Pathing',
  description: 'The ultimate motion profiling and pathing library for FTC teams.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={<Banner storageKey="welcome">Welcome to ApexPathing! 🎉</Banner>}
          navbar={<Navbar logo={<b>ApexPathing</b>} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ApexPathing/main.git"
          editLink={null}
          feedback={{ content: null }}
          footer={
            <footer className="mt-auto border-t py-5 px-6 text-center text-sm">
              &copy; 2026 Apex Pathing.
            </footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}