interface Props {
  name: string;
  children: string;
  isRequired?: boolean;
}

export default function TextArea({
  name,
  children,
  isRequired = false,
}: Props) {
  const id = name.replaceAll(" ", "");
  return <></>;
}
