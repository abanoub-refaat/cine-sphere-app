import "../global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="nav-screen">
          <Navbar />
          <Sidebar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
