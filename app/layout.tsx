import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
function PageBanner() {
  return (
    <Banner storageKey="some-key">Welcome to ApexPathing! 🎉</Banner>
  )
}

function PageNavbar() {
  return (
    <Navbar
      logo={<b>ApexPathing</b>}
    />
  )
}

function PageFooter() {
  return (
      <footer className={`mt-auto border-t border-fd-border border-accent-text text-accent-text py-5 px-6 text-center text-sm text-muted-foreground`}>
        &copy; 2026 Apex Pathing. Apex Pathing is licensed under the <a href="https://example.com/" className="text-fd-foreground hover:underline">FIGURE OUT LICENSE STUFF</a>. The Apex Pathing name and logo are trademarks of Apex Pathing.
      </footer>
  )
}
 
export default async function RootLayout({ 
  children 
} :{
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={PageBanner()}
          navbar={PageNavbar()}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ApexPathing/main.git"
          footer={PageFooter()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}