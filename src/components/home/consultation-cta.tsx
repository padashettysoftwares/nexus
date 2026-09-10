"use client";

import * as React from "react";
import { BookConsultationModal } from "@/components/ui/book-consultation-modal";
import { ActionButton } from "./primitives";

type Props = {
  children?: React.ReactNode;
  variant?: React.ComponentProps<typeof ActionButton>["variant"];
  size?: React.ComponentProps<typeof ActionButton>["size"];
  className?: string;
  /** Pre-fills the "service of interest" line in the WhatsApp message. */
  serviceContext?: string;
};

/**
 * The one conversion action on the marketing pages. Wraps the existing
 * consultation modal so the hero, CTA band and navbar all open the same flow
 * instead of each growing their own form.
 */
export function ConsultationCta({
  children = "Book a consultation",
  variant = "solid",
  size = "md",
  className,
  serviceContext,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </ActionButton>
      <BookConsultationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceContext={serviceContext}
      />
    </>
  );
}
