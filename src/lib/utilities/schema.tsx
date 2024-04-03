export interface UnderlineTextProps {
  text: string;
  color: string;
  fontSize: number;
  fontWeight: number;
}

export interface PerksCardProps {
  cardImg: string;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  title: string;
  number: string;
  description: string;
}

export interface ReviewCardProps {
  img: string;
  review: string;
  userName: string;
  post: string;
}

export interface ButtonProps {
  bg: string;
  color: string;
  text: string;
  width: string;
  onClick: () => void;
}

export interface IconButtonProps {
  bg: string;
  color: string;
  text: string;
  icon: any;
  width: string;
  flip: boolean;
}

export interface CustomerFeatureCardProps {
  img: string;
  title: string;
  description: string;
}

export interface InstructionComponentProps {
  title: string;
  descriptions: string[];
  questions: string[];
}

export interface DocumentationButtonProps {
  step: number;
  setStep: (step: number) => void;
}

export interface FormInputProps {
  type: string;
  width: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

export interface CarouselProps {
  image: string;
  title: string;
  description: string;
}

export interface SideNavLinkProps {
  text: string;
  isActive: boolean;
  Icon: any;
  onClick: () => void;
}

export interface SideNavProps {
  navPosition: number;
  setNavPosition: (step: number) => void;
}

export interface SideNavIconProps {
  isActive: boolean;
}

export interface WalletCardProps {
  title: string;
  currency: string;
  balance: string;
  date: string;
  headingColor: string;
}

export interface QuickActionItem {
  bgColor: string;
  title: string;
  icon: any;
}
