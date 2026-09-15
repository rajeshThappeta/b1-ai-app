
import {OllamaEmbeddings} from '@langchain/ollama'

// configure ollama langchain
const embeddingModel=new OllamaEmbeddings({
    model:"nomic-embed-text:latest",
    baseUrl:"http://localhost:11434"
})


export async function generateEmbedding(sentence){
    //create embedding for the sentence
    let embedding=await embeddingModel.embedQuery(sentence)
    //return embedding
    return embedding
}


