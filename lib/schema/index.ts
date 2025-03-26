import { z } from "zod";

export const patientSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  dateOfBirth: z.date(),

  diagnosedWith: z.enum(["down-syndrome", "autism", "other"], {
    required_error: "Please select a diagnosis",
  }),

  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .number()
    .min(10, { message: "Phone number must be at least 10 digits" }),

  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
  preferredLanguage: z.enum(["english", "spanish", "mandarin", "other"]),

  address: z.string().min(5, { message: "Address is required" }),

  additionalNotes: z.string().optional(),

  accessibilitySettings: z
    .object({
      textToSpeech: z.boolean().optional(),
      fontSize: z.number().min(12).max(24).optional(),
      colorScheme: z.enum(["high-contrast", "pastel", "default"]).optional(),
    })
    .optional(),
});
