import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import EmailTemplate from "./email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactForm = z.object({
  name: z.string(),
  email: z.email(),
  subject: z.string(),
  message: z.string()
})

type ContactForm = z.infer<typeof ContactForm>;

export async function POST(request: NextRequest) {
  try {
    
    const formDataParsed = await request.formData();

    const validated = ContactForm.safeParse(Object.fromEntries(formDataParsed));

    if (!validated.success) {
      console.log({ errors: validated.error }, { status: 400 })
      return Response.json({ errors: validated.error }, { status: 400 });
    }

    const name = validated.data.name;
    const email = validated.data.email;
    const subject = validated.data.subject;
    const message = validated.data.message;


    const siteUrl = process.env.NODE_ENV === "production" 
      ? process.env.NEXT_PUBLIC_SITE_URL ?? "https://thedeviko.vercel.app"
      : `http://${request.headers.get('host')}`

    const { error } = await resend.emails.send({
      from: "TheDevIko Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `${subject}`,
      react: EmailTemplate({ name, email, message, siteUrl })
    });

    if (error) {
      return new NextResponse(null, {
        status: 303,
        headers: { Location: "/contact?error=1" },
      });
      
    }

    return new NextResponse(null, {
      status: 303,
      headers: { Location: "/contact/thank-you" },
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}