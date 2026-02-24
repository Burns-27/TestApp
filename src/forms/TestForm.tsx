import { Form, Stack, Button } from "react-bootstrap";
import { TestCard } from "../components/TestCard";
import TestCard2 from "../components/TestCard2";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { type FormSchemaType, formSchema } from "./TestFormSchema";

export default function TestForm() {
  const [activeStep, setActiveStep] = useState(1);
  const [stateA, setStateA] = useState(false);
  const methods = useForm<FormSchemaType>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardA: { testFloat: "", testText: "", testYesNo: "" },
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>TestForm</h1>
        <Button onClick={() => setStateA(!stateA)}>State A</Button>
        {stateA && <p>State A is True</p>}
        <Stack gap={3} className="mx-auto">
          {activeStep >= 1 && (
            <TestCard
              setStep={setActiveStep}
              validationFlag={() => setStateA(!stateA)}
            />
          )}
          {activeStep >= 2 && <TestCard2 />}
        </Stack>
      </Form>
    </FormProvider>
  );
}
