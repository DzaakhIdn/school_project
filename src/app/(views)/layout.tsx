import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/footer";

export default function ViewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

