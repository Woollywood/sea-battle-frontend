import { z } from 'zod'

import { validationPhrases } from '@/utils/helpers'

export const signUpSchema = z.object({
  username: z.string().min(1, validationPhrases.required).min(3),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
