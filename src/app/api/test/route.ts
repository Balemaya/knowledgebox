import {AudioTranscriptParagraphsLoader} from "langchain/document_loaders/web/assemblyai";
import { NextResponse } from "next/server";

const handler = (req: Request) => {
    console.log("working....")
    const loader = AudioTranscriptParagraphsLoader
  
    return NextResponse.json({greetings: "hi"})
}
  

export { handler as GET, handler as POST };