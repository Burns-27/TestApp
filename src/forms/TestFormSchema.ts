import * as z from "zod";

export const formSchema = z.object({
  cardA: z.object({
    testFloat: z.string().min(2),
    testText: z.string(),
    testYesNo: z.string(),
  }),
});
export type FormSchemaType = z.infer<typeof formSchema>;
export type FormSchemaInput = z.input<typeof formSchema>;
export type FormSchemaOutput = z.output<typeof formSchema>;
