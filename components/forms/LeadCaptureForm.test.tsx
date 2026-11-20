/**
 * LeadCaptureForm now renders Calendly (forms replaced sitewide).
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { LeadCaptureForm } from "./LeadCaptureForm";

vi.mock("@/components/calendly/CalendlyWidget", () => ({
  default: ({ url }: { url: string }) => (
    <div data-testid="calendly-widget" data-url={url}>
      Calendly Widget
    </div>
  ),
}));

describe("LeadCaptureForm", () => {
  it("renders Calendly instead of a traditional form", () => {
    render(<LeadCaptureForm />);
    expect(screen.getByTestId("calendly-widget")).toBeInTheDocument();
    expect(screen.queryByLabelText(/first name/i)).not.toBeInTheDocument();
  });

  it("uses showing URL for property-search", () => {
    render(<LeadCaptureForm formType="property-search" />);
    expect(
      screen.getByTestId("calendly-widget").getAttribute("data-url"),
    ).toContain("calendly.com");
  });

  it("shows schedule headline for contact", () => {
    render(<LeadCaptureForm formType="contact" />);
    expect(
      screen.getByText(/Schedule with Dr. Jan Duffy/i),
    ).toBeInTheDocument();
  });
});
