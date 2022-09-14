import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean() });

/*
====== SEM O ZOD =========

interface ILens {
  degree: number,
  antiGlare: boolean,
  blueLightFilter: boolean,
} 

const lensZodSchema = new Schema<ILens>({
  degree: { type: Number, required: true },
  antiGlare: { type: Boolean, required: true },
  blueLightFilter: { type: Boolean, required: true },
});

*/

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };