interface Props {
  name: string;
  children: string;
}

export default function Text({ name, children }: Props) {
  const id = name.replaceAll(" ", "");
  const { control } = useFormContext<FormSchema>();
  return <></>;
}
