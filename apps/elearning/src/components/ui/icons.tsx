export interface Icon
  extends React.ForwardRefExoticComponent<
    React.RefAttributes<SVGSVGElement> & {
      className?: string
    }
  > {}

export {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EyeClosedIcon,
  EyeIcon,
  GalleryVerticalEndIcon,
  LanguagesIcon,
  LoaderIcon,
} from 'lucide-react'
