import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

interface Props {
  id: string;
  name: string;
  label: string;
}

export default function TextFloat({ id, name, label }: Props) {
  return (
    <FloatingLabel controlId={id} label={label} className="mb-3">
      <Form.Control type="text" placeholder={label} name={name} />
    </FloatingLabel>
  );
}
