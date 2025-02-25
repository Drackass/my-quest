import Image from "next/image";
import MetaGif from '@/public/meta.gif'

export default function NotFound() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex flex-col gap-2 justify-center items-center  ">
      <p className=" font-semibold text-muted-foreground">Sorry, we couldn't find that page</p>
      <Image src={MetaGif} alt="Meta Logo Animated" width={50} height={50} />
    </div>
  );
}
