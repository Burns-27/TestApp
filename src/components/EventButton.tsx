import Button from "react-bootstrap/Button";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: "Primary" | "Secondary" | "Danger" | "Sucess";
  onButtonClick: () => void;
}

export default function EventButton({
  children,
  onButtonClick,
  style = "Primary",
}: Props) {
  return (
    <Button as="button" type="button" variant={style} onClick={onButtonClick}>
      {children}
    </Button>
  );
}
