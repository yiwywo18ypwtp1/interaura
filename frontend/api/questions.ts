import OpenAI from "openai"
import { Concept } from "@/types/concept";

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const generateConcepts = async (topic: string): Promise<Concept[]> => {
    const prompt = `
    Generate 10 key machine-readable concept identifiers
    for a ${topic} technical interview.

    Rules:
    - Use lowercase.
    - Use dot notation.
    - No spaces.
    - No duplicates.
    - Keep identifiers stable and generic.

    Return JSON:

    {
        "concepts": [
            {
                "id": "string",
                "description": "string"
            }
        ]
    }

    No comments, explanations outside JSON
  `

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        response_format: {
            type: "json_schema",
            json_schema: {
                name: "concepts",
                schema: {
                    type: "object",
                    properties: {
                        concepts: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: { type: "string" },
                                    description: { type: "string" },
                                },
                                required: ["id", "description"]
                            }
                        }
                    },
                    required: ["concepts"]
                }
            }
        },
        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    })

    const content = response.choices[0].message.content

    if (!content) {
        throw new Error("OpenAI returned empty content")
    }

    const parsed = JSON.parse(content)

    return parsed.concepts
}

export const generateQuestions = async (topic: string) => {
    const concepts: Concept[] = await generateConcepts(topic)

    const listedConcepts = concepts.map(concept => concept.id)

    const system_text = `
        You are a senior technical interviewer.
        Generate high-quality interview questions.
        Return ONLY valid JSON.
    `

    const user_text = `
        Here are the available concepts:

        ${listedConcepts.map(c => `- ${c}`).join("\n")}

        Generate 30 technical interview questions for a ${topic} developer.

        Return JSON in this format:

        {
        "questions": [
            {
            "id": "string",
            "text": "string",
            "concept": "string",
            "difficulty": "easy | medium | hard"
            }
        ]
        }

        Rules:
        - Use ONLY provided concept IDs.
        - Do not invent new ones.
        - Each concept must appear at least once.
        - Avoid repeating the same concept more than 3 times.
        - Mix difficulty levels.
        - No explanations outside JSON
    `

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.2,
        response_format: {
            type: "json_schema",
            json_schema: {
                name: "question_bank",
                schema: {
                    type: "object",
                    properties: {
                        questions: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: { type: "string" },
                                    text: { type: "string" },
                                    concept: { type: "string" },
                                    difficulty: {
                                        type: "string",
                                        enum: ["easy", "medium", "hard"]
                                    }
                                },
                                required: ["id", "text", "concept", "difficulty"]
                            }
                        }
                    },
                    required: ["questions"]
                }
            }
        },
        messages: [
            {
                role: "system",
                content: system_text
            },
            {
                role: "user",
                content: user_text
            }
        ]
    })

    const content = response.choices[0].message.content

    if (!content) {
        throw new Error("OpenAI returned empty content")
    }

    const parsed = JSON.parse(content)

    return parsed.questions
}