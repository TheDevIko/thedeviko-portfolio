import { createClient } from "@/lib/supabase/client";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ProjectImageProp = {
  src: string | null,
  alt: string,
  className?: string
}

export default function ProjectImage({ 
  src,
  alt,
  className
}: ProjectImageProp) {

  const supabase = createClient();
  
  const imageUrl = src ? supabase.storage.from('images').getPublicUrl(src).data.publicUrl : null;

  if (!imageUrl) {    
    return <PhotoIcon className="lg:size-80 md:size-72 sm:size-54 size-36 shrink-0 text-foreground"/>
  }
  
  return (
    <Image
      src={ imageUrl }
      alt={ alt }
      fill
      sizes="4"
      loading="eager"
      unoptimized
      className={ className }
    />
  )
}