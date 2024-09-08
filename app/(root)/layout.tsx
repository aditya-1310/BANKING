import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Loggindetail={
    name:"Aditya", lastname:"Bhadade"
}
  return (
    <html>
      <body>

   <main className="flex  h-screen w-full font-inter">
    <Sidebar user={Loggindetail}/>
    {children}
   </main>
      </body>
    </html>
  );
}
