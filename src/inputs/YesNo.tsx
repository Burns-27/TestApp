import { Form } from "react-bootstrap";
import type { ReactNode } from "react";
import Row from "react-bootstrap/Row";
import type { FieldError } from "react-hook-form";
interface Props {
  children: ReactNode;
  invalid: boolean;
  error?: undefined | FieldError;
  yesValue?: string;
  noValue?: string;
  onYes?: () => null;
  onNo?: () => null;
  name: string;
}
//[ ] (Componenets V2) Turn YesNo into Button Group
export default function YesNo({
  children,
  name,
  yesValue = "yes",
  noValue = "no",
  onYes = () => null,
  onNo = () => null,
}: Props) {
  return (
    <Form.Group className="mb-3">
      <Row>{children}</Row>
      <Row className="justify-content-evenly">
        <Form.Check
          inline
          className="col-3"
          label="Yes"
          name={name}
          value={yesValue}
          type="radio"
          onClick={onYes}
        />
        <Form.Check
          inline
          className="col-3 "
          label="No"
          name={name}
          value={noValue}
          type="radio"
          onClick={onNo}
        />
      </Row>
    </Form.Group>
  );
}
