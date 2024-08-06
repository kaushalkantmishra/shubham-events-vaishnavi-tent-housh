import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // 'gmail' should be in lowercase
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  },
});

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Use environment variable for recipient email
      subject: "New Contact Us Message",
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
