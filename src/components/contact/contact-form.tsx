"use client";

import { useId, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceInterestOptions, submitContactForm } from "@/lib/contact";
import {
  hasValidationErrors,
  validateContactForm,
} from "@/lib/validation";
import type { ContactFormErrors, ContactFormValues } from "@/types";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKind, setErrorKind] = useState<string | null>(null);
  const statusId = useId();
  const formRef = useRef<HTMLFormElement>(null);

  const updateField = <K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as keyof ContactFormErrors]) return prev;
      const next = { ...prev };
      delete next[key as keyof ContactFormErrors];
      return next;
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(values);
    setErrors(validation);
    if (hasValidationErrors(validation)) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setErrorKind(null);

    const result = await submitContactForm(values);

    if (result.ok) {
      setStatus("success");
      setValues(initialValues);
      formRef.current?.reset();
      return;
    }

    setStatus("error");
    if (result.kind === "config") {
      setErrorKind("config");
    } else if (result.kind === "spam") {
      setErrorKind("spam");
    } else {
      setErrorKind("generic");
    }
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      "mt-1.5 w-full rounded-xl border bg-[#081720]/70 px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/75 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/15",
      hasError ? "border-red-400/80" : "border-border/80",
    );

  return (
    <div>
      <div
        id={statusId}
        role="status"
        aria-live="polite"
        className="mb-4 min-h-[1.25rem] text-sm"
      >
        {status === "success" ? (
          <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-foreground">
            Thank you. Your inquiry has been received. We&apos;ll review the
            information and discuss the next steps.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-lg border border-red-400/40 bg-red-950/30 px-4 py-3 text-foreground">
            {errorKind === "config"
              ? "Contact delivery is not configured yet. Please reach out through another channel if one is listed on this page."
              : "We couldn't send your inquiry right now. Please try again or contact us directly."}
          </p>
        ) : null}
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website ?? ""}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass(Boolean(errors.name))}
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-sm text-red-400">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass(false)}
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Work email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass(Boolean(errors.email))}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass(false)}
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service interest <span className="text-primary">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className={fieldClass(Boolean(errors.service))}
            value={values.service}
            onChange={(e) => updateField("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceInterestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-1 text-sm text-red-400">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Project description <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={fieldClass(Boolean(errors.message))}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-sm text-red-400">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="flex gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            className="mt-1 size-4 rounded border-border accent-primary"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            I agree to be contacted about this inquiry. See our{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            . <span className="text-primary">*</span>
          </label>
        </div>
        {errors.consent ? (
          <p id="consent-error" className="text-sm text-red-400">
            {errors.consent}
          </p>
        ) : null}

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            "Submit inquiry"
          )}
        </Button>
      </form>
    </div>
  );
}
