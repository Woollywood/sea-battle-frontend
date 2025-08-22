import { z } from 'zod'

import { validationPhrases } from '~/utils/helpers'

export const signInSchema = z.object({
  username: z.string().min(1, validationPhrases.required).min(3),
})

export type SignIpSchema = z.infer<typeof signInSchema>
