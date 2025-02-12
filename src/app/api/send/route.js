import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      react: (
        <>
          <h3>{email}</h3>
          <h2>{message}</h2>
        </>
      )
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email.", details: error.message },
      { status: 500 }
    );
  }
}
