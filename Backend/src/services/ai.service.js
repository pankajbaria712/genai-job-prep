const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeQuestionArray(value) {
  return normalizeArray(value).map((item) => ({
    question: String(item?.question ?? ""),
    intention: String(item?.intention ?? ""),
    answer: String(item?.answer ?? ""),
  }));
}

function normalizeSkillGapArray(value) {
  return normalizeArray(value).map((item) => ({
    skill: String(item?.skill ?? ""),
    severity: ["low", "medium", "high"].includes(item?.severity)
      ? item.severity
      : "medium",
  }));
}

function normalizePlanArray(value) {
  return normalizeArray(value).map((item) => ({
    day: Number(item?.day ?? 1),
    focus: String(item?.focus ?? ""),
    tasks: normalizeArray(item?.tasks).map((task) => String(task)),
  }));
}

function parseJsonResponse(rawText) {
  if (!rawText) {
    throw new Error("Empty response from Gemini");
  }

  const cleaned = rawText
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) {
      throw error;
    }
    return JSON.parse(match[0]);
  }
}

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const basePrompt = `
You are an expert career coach and technical interviewer.

Analyze the candidate's resume, self-description, and the job description.
Generate a highly personalized interview preparation report.

IMPORTANT:
- Use only the actual candidate data from the resume and self-description.
- Do not invent experience, projects, or skills that are not present.
- Technical questions must be directly based on the resume and the job requirements.
- Behavioral questions must be related to the candidate's real education, internships, projects, and work experience.
- Identify genuine skill gaps by comparing the candidate's profile with the job requirements.
- Create a practical 5-day preparation plan.
- Do not return empty arrays.
- If the candidate profile is limited, return the best 1-3 relevant entries instead of empty arrays.
- Return ONLY valid JSON with this structure:
{
  "jobTitle": "Provide the job title from the job description",
  "matchScore": 0,
  "technicalQuestions": [
    { "question": "", "intention": "", "answer": "" }
  ],
  "behavioralQuestions": [
    { "question": "", "intention": "", "answer": "" }
  ],
  "skillGaps": [
    { "skill": "", "severity": "low|medium|high" }
  ],
  "preparationPlan": [
    { "day": 1, "focus": "", "tasks": [""] }
  ]
}

Candidate Resume:
${resume}

Candidate Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: basePrompt,
    config: {
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  });

  let parsed = parseJsonResponse(response.text);

  if (
    !normalizeArray(parsed.technicalQuestions).length ||
    !normalizeArray(parsed.behavioralQuestions).length ||
    !normalizeArray(parsed.skillGaps).length ||
    !normalizeArray(parsed.preparationPlan).length
  ) {
    const retryPrompt = `${basePrompt}

IMPORTANT: Do not return empty arrays. Return at least one meaningful item for each required array using the actual candidate information only.`;

    const retryResponse = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: retryPrompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    parsed = parseJsonResponse(retryResponse.text);
  }

  return {
    JobTitle: String(parsed.jobTitle ?? "Interview Preparation"),
    matchScore: Number.isFinite(Number(parsed.matchScore)) ? Number(parsed.matchScore) : 0,
    technicalQuestions: normalizeQuestionArray(parsed.technicalQuestions),
    behavioralQuestions: normalizeQuestionArray(parsed.behavioralQuestions),
    skillGaps: normalizeSkillGapArray(parsed.skillGaps),
    preparationPlan: normalizePlanArray(parsed.preparationPlan),
  };
}

module.exports = generateInterviewReport;
