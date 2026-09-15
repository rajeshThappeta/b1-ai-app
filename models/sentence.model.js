import {Schema,model} from 'mongoose'


const sentenceSchema=new Schema({
    sentence:{
        type:String,
        required:[true,"Sentence is required"]
    },
    embedding:{
        type:[Number]
    }
},{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})


//create model
export const sentenceModel=model("sentence",sentenceSchema)