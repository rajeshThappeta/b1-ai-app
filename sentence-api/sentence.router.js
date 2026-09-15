import express from "express";
import { sentenceModel } from "../models/sentence.model.js";
import { generateEmbedding } from "../services/generate-embedding.service.js";
export const sentenceRouter = express.Router();

// Create sentences
sentenceRouter.post("/", async (req, res) => {
  // get sentece from req
  let { sentence } = req.body;
  // get embedding of this sentence
  let embedding = await generateEmbedding(sentence);
  // save sentence in db
  await sentenceModel.create({ sentence, embedding });
  // send res
  res.status(201).json({ sucess: true, message: "Sentence created" });
});

// Search for sentences
sentenceRouter.post("/search", async (req, res) => {});
