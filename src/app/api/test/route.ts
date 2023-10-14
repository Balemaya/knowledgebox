import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import { NextResponse } from "next/server";

const handler = (req: Request) => {
    console.log("working....")
    const loader = YoutubeLoader
    return NextResponse.json({greetings: "hi"})
}
  

export { handler as GET, handler as POST };