import type { ContactFormErrors, ContactFormValues } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your work email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please select a service interest.";
  }

  if (!values.message.trim()) {
    errors.message = "Please describe your project or challenge.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide a bit more detail (at least 20 characters).";
  }

  if (!values.consent) {
    errors.consent = "Please confirm you agree to be contacted about your inquiry.";
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
