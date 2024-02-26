import { NextResponse } from "next/server";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(req: Request) {

    const { email }: { email: string } = await req.json();

    try {
        const response = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: "pending",
            }
        );
        return NextResponse.json({ id: response.id, response: response }, {status: 200})
    } catch (err: any) {
        if (JSON.parse(err.response.text).title === "Member Exists"){
            return NextResponse.json(JSON.parse(err.response.text), {status: 400});
        }
        else return NextResponse.json(JSON.parse(err.response.text), {status: 500});
    }

}
