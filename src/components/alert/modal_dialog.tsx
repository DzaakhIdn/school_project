import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

type ModalDialogImageProps = {
  image_triger: string;
  image: string;
  title: string;
  description: string;
};

export function ModalDialogImage({
  image_triger,
  image,
  title,
  description,
}: ModalDialogImageProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="group relative w-full h-full rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105">
          <Image
            src={image_triger}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className=" absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className={`${montserrat.className} text-white font-semibold text-lg md:text-xl leading-tight`}>
              {title}
            </h3>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col justify-center items-center">
          <AlertDialogTitle
            className={`${montserrat.className} font-bold text-slate-800`}
          >
            {title}
          </AlertDialogTitle>
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg w-full h-auto"
          />
          <AlertDialogDescription
            className={`${montserrat.className} font-light italic text-slate-800`}
          >
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:cursor-pointer">close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
