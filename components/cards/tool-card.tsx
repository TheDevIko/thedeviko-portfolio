import { IconType } from "react-icons";

type ToolCardProp = {
  icon: IconType,
  tool: string,
  className?: string
}

export default function ToolCard({ 
  icon: Icon,
  tool
}: ToolCardProp) {
  return (
    <div className="px-2 py-1 md:gap-3 sm:gap-2 gap-1.5 w-fit flex flex-row items-center align-middle select-none hover:text-primary hover:cursor-default transition-colors ease-in-out duration-300">
      <Icon className="md:size-6 sm:size-5 size-4 text-current shrink-0" title={tool} />
      <p className="lg:text-base md:text-sm text-xs">{ tool }</p>
    </div>
  );
}