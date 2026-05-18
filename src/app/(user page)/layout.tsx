import { Header } from "@/components/layout/PageHeader"
import { Footer } from "@/components/layout/PageFooter"

export default function UserPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
        {children}    
      <Footer />
    </div>
  );
}
