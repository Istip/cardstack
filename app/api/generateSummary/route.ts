import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  console.log(todos);

  // communication with openAI

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, welcome the user named Isti on the CardStack application! Limit response to 200 characters.",
      },
      {
        role: "user",
        content: `Short welcome for the user then provide a summary of the following todos. Count the todos in every category, summarize it. Here is the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("✅ data:", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
