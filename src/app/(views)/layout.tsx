import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer/footer";
import SplashScreen from "@/animate/SplashScreen";

export default function ViewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SplashScreen>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </SplashScreen>
    </>
  );
}
