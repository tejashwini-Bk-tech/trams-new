type ContactRequest = {
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Trams Website <onboarding@resend.dev>";


  if (!resendApiKey || !toEmail) {
    return Response.json(
      { error: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const inquiryType = body.inquiryType?.trim() || "General Inquiry";
  const organization = body.organization?.trim() || "Not provided";
  const phone = body.phone?.trim() || "Not provided";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
     
      reply_to: email,
      subject: `Trams ${inquiryType} Inquiry`,
      text: [
        `Inquiry Type: ${inquiryType}`,
        `Name: ${name}`,
        `Organization: ${organization}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  const result = (await resendResponse.json()) as { message?: string; error?: string };

  if (!resendResponse.ok) {
    return Response.json(
      { error: result.message || result.error || "Unable to send your message right now." },
      { status: resendResponse.status },
    );
  }

  return Response.json({ success: true });
}
