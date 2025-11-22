import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const generateStory = async (req, res) => {
  try {
    const { prompt } = req.body;
    const files = req.files;

    // Convert user images to base64
    const imageBase64 = files.map(file => {
      const img = fs.readFileSync(file.path, { encoding: "base64" });
      return `data:image/jpeg;base64,${img}`;
    });

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a visual storyteller. Create emotional stories from images." },
        { role: "user", content: `Create a story based on these images + prompt: ${prompt}` }
      ]
    });

    res.json({
      story: aiResponse.choices[0].message.content,
      images: imageBase64
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Story generation failed" });
  }
};