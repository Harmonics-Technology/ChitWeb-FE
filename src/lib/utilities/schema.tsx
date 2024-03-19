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
