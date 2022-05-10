import { Button } from 'react-bootstrap';

export type buttonProps = {
  text: string;
};

export const ButtonPrimary = ({ text }: buttonProps) => {
  return <Button className="btn-primary">{text}</Button>;
};

export const ButtonWhite = ({ text }: buttonProps) => {
  return <Button className="btn-white">{text}</Button>;
};
