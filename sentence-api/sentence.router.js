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
sentenceRouter.post("/search", async (req, res) => {
  // get user's query from req
  let query = req.body.query;
  // get embedding of user's query
  let queryEmbedding = await generateEmbedding(query);
  // vector search
  let results = await sentenceModel.aggregate([
    {
      $vectorSearch: {
        index: "vector_index",
        path: "embedding",
        queryVector: queryEmbedding,
        numCandidates: 10,
        limit: 3,
      },
    },
    {
      $project: {
        _id: 0,
        sentence: 1,
        score:{
          $meta:"vectorSearchScore"
        }
      },
    },
  ]);
  // send res
  res.status(200).json(results);
});
