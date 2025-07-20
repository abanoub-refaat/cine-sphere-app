import Signup from "@/components/Signup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
        <Signup />
      </body>
    </html>
  );
}
