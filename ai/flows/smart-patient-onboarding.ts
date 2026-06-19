
'use server';
/**
 * @fileOverview An AI agent that categorizes patient conditions and suggests relevant physiotherapy treatments.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PatientDescriptionInputSchema = z.object({
  description: z.string().describe("The patient's description of their pain points or injury."),
});
export type PatientDescriptionInput = z.infer<typeof PatientDescriptionInputSchema>;

const PatientOnboardingOutputSchema = z.object({
  conditionCategory: z.string().describe("A concise categorization of the patient's condition."),
  suggestedTreatments: z.array(z.string()).describe("A list of suggested treatments."),
  explanation: z.string().describe("A brief explanation of why these treatments are suggested."),
});
export type PatientOnboardingOutput = z.infer<typeof PatientOnboardingOutputSchema>;

export async function smartPatientOnboarding(input: PatientDescriptionInput): Promise<PatientOnboardingOutput> {
  return smartPatientOnboardingFlow(input);
}

const patientOnboardingPrompt = ai.definePrompt({
  name: 'patientOnboardingPrompt',
  input: { schema: PatientDescriptionInputSchema },
  output: { schema: PatientOnboardingOutputSchema },
  prompt: `You are an AI medical assistant for Dr Manash Kalita's physiotherapy clinic. 
  Your goal is to help patients understand their condition based on their description.

  Available treatments to suggest (choose up to 3):
  - Kinesiology Taping
  - Dry Needling
  - Cupping Therapy
  - Myofascial Release
  - IASTM
  - Pain Relief Therapy
  - Mobility Restoration
  - Sports Rehabilitation
  - Posture & Movement Correction

  Patient's Description: {{{description}}}`,
});

const smartPatientOnboardingFlow = ai.defineFlow(
  {
    name: 'smartPatientOnboardingFlow',
    inputSchema: PatientDescriptionInputSchema,
    outputSchema: PatientOnboardingOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await patientOnboardingPrompt(input);
      if (!output) {
        throw new Error('AI returned no output');
      }
      return output;
    } catch (e) {
      console.error('Genkit flow error:', e);
      throw e;
    }
  }
);
