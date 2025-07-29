import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { YoutubeIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className={`min-h-screen flex flex-col ${montserrat.className}`}>
      <div className="grow shadow" />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <Image
                src="/important/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-12 h-auto sm:w-16 md:w-17"
              />

              <ul className="mt-6 text-sm lg:text-base flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground hover:cursor-pointer"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold text-sm md:text-lg">Stay up to date</h6>
              <form className="mt-4 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" className="text-sm" />
                <Button className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer">Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-slate-400 italic text-xs">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                HSI Boarding School
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <YoutubeIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <FacebookIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
