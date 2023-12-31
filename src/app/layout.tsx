import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery Hub",
  description: "Gallery Hub : Place Images on the Cloud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b bg-background fixed top-0 z-[999] w-full">
          <div className="flex h-16 container w-full   mx-auto items-center px-4">
            {/* <TeamSwitcher /> */}
            <Image src={'/album-icon.png'} alt="icon for photos app" width={50} height={50} />
      
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="/default-profileimage.png"
                  alt="@default-profile"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex mt-12 relative">
          <Sidebar />
          <div className=" py-2 w-full pl-[15%] px-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
