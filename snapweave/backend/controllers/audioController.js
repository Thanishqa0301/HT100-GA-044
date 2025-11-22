import textToSpeech from "@google-cloud/text-to-speech";
import fs from "fs";

const client = new textToSpeech.TextToSpeechClient();

export const generateAudio = async (req, res) => {
  try {
    const { text } = req.body;

    const request = {
      input: { text },
      voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
      audioConfig: { audioEncoding: "MP3" }
    };

    const [response] = await client.synthesizeSpeech(request);

    const filename = `story-${Date.now()}.mp3`;
    const filepath = `uploads/${filename}`;

    fs.writeFileSync(filepath, response.audioContent, "binary");

    res.json({ audioUrl: `/uploads/${filename}` });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Audio generation failed" });
  }
};