import type { ReactNode } from 'react';

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
  onClick: () => void;
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
  readonly?: boolean;
}

export interface CarouselProps {
  image: string;
  title: string;
  description: string;
}

export interface SideNavLinkProps {
  text: string;
  icon: any;
  link: string;
  activeIcon: any;
}

export interface SideNavProps {
  navPosition: number;
  setNavPosition: (step: number) => void;
}

export interface VerificationFlowProps {
  position: number;
  setPosition: (step: number) => void;
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

export interface QuickActionItemProps {
  bgColor: string;
  title: string;
  icon: any;
  onClick: () => void;
}

export interface VerificationSlideProps {
  title: string;
  description: string;
  image: string;
  text: string;
  onClick: () => void;
  linkText: string;
}

export interface CustomModalprops {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface StepProps {
  step: number;
  setStep: (step: number) => void;
}

export interface CloseModalProps {
  closeModal: () => void;
}

export interface OpenModalProps {
  openModal: () => void;
}

export interface OutlineButtonProps {
  color: string;
  text: string;
  onClick: () => void;
  width: string;
}

export interface TransactionStatusProps {
  status: string;
  closeModal: () => void;
}

export interface TableHerderItemProps {
  title: string;
  width: string;
}

export interface TransactionListItemProps {
  image: string;
  transactionTitle: string;
  transactionType: string;
  transactionId: string;
  transactionStatus: string;
  transactionDate: string;
  transactionTime: string;
  transactionAmount: string;
  action: () => void;
}

export interface InvoiceListItemProps {
  image: string;
  transactionTitle: string;
  transactionId: string;
  transactionStatus: string;
  transactionDate: string;
  transactionTime: string;
  transactionAmount: string;
  action: () => void;
}

export interface TransactionDetailsProps {
  transactionTitle: string;
  transactionType: string;
  transactionId: string;
  transactionStatus: string;
  transactionDate: string;
  transactionAmount: string;
  transactionSource: string;
  downloadReceipt: () => void;
  shareReceipt: () => void;
}

export interface IconProps {
  isActive: boolean;
}

export interface BackButtonProps {
  link: string;
  title: string;
}

export interface NavigationItemProps {
  icon: any;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export interface SecurityNavigationItemProps {
  Icon: any;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export interface ProductCardProps {
  image: string;
  title: string;
  category: string;
}

export interface BillItemButtonProps {
  image: string;
  label: string;
  link: string;
}

export interface BillerItemButtonProps {
  image: string;
  label: string;
  onClick: () => void;
}

export interface IconProps {
  isActive: boolean;
}

export interface DeleteAccountModalProps {
  closeModal: () => void;
  isOpen: boolean;
}

export interface RequestFundsStatusProps {
  status: string;
}

export interface IndexProps {
  index: number
}