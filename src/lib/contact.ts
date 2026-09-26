import type { ContactFormValues, ContactSubmitResult } from "@/types";

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function getAccessKey(): string | null {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!key || key.trim().length === 0) return null;
  return key.trim();
}

async function submitViaWeb3Forms(
  payload: ContactPayload,
  honeypot: string | undefined,
): Promise<ContactSubmitResult> {
  const accessKey = getAccessKey();
  if (!accessKey) {
    return { ok: false, kind: "config" };
  }

  if (honeypot && honeypot.trim().length > 0) {
    return { ok: false, kind: "spam" };
  }

  const subject = `Manda Vertex Website Inquiry — ${payload.service}`;

  const body = {
    access_key: accessKey,
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    service: payload.service,
    message: payload.message,
    subject,
    from_name: "Manda Vertex Website",
    replyto: payload.email,
    botcheck: "",
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return { ok: false, kind: "network" };
    }

    const data = (await response.json()) as { success?: boolean };
    if (data.success) {
      return { ok: true };
    }
    return { ok: false, kind: "unknown" };
  } catch {
    return { ok: false, kind: "network" };
  }
}

/** Provider-agnostic contact submission — swap implementation here as needed. */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmitResult> {
  const payload: ContactPayload = {
    name: values.name.trim(),
    company: values.company.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    service: values.service,
    message: values.message.trim(),
  };

  return submitViaWeb3Forms(payload, values.website);
}

export const serviceInterestOptions = [
  "Advanced AI Chatbots",
  "AI & Software Integration",
  "Custom CRM & Automation",
  "Mobile & Web Applications",
  "Ongoing Support",
  "Other",
] as const;
