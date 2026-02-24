import { useFormContext } from "react-hook-form";
import type { FormSchemaType } from "../forms/TestFormSchema";

import { useState } from "react";

interface Props {
  setStep: (step: number) => void;
  validationFlag: () => void;
}

export function TestCard({ setStep, validationFlag }: Props) {
  const { trigger } = useFormContext<FormSchemaType>();
  const [validated, SetValidated] = useState(false);
  const onNext = async () => {
    const isValid = await trigger("cardA");
    SetValidated(true);
    validationFlag();
    if (isValid) {
      setStep(2);
    }
  };
  return <></>;
}
