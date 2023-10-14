import { NextResponse } from "next/server";

const handler = (req: Request) => {
    console.log("working....")
    
    return NextResponse.json({greetings: "hi"})
}
  

export { handler as GET, handler as POST };