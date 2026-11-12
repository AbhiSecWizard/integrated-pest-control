
import { useState } from "react";
import {
  CONTACT_INFO,
  SERVICE_OPTIONS,
  PROPERTY_OPTIONS,
} from "../data/homeData";
import Field from "../shared/Field";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const INITIAL_FORM = {
  name: "",
  phone: "",
  service: "",
  property: "",
  area: "",
  commodity: "",
  quantity: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const isFumigation =
    formData.service === "Warehouse Fumigation";

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (
      !GOOGLE_SCRIPT_URL ||
      !GOOGLE_SCRIPT_URL.startsWith(
        "https://script.google.com/macros/s/"
      ) ||
      GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE")
    ) {
      setSubmitStatus(
        "Google Apps Script URL is not configured."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    const enquiryData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      property: formData.property,
      area: formData.area.trim(),
      commodity: isFumigation
        ? formData.commodity.trim()
        : "",
      quantity: isFumigation
        ? formData.quantity
        : "",
      message: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(enquiryData),
      });

      // no-cors responses are opaque.
      // A successful fetch does not confirm that
      // Google Sheets saved the enquiry.

      setSubmitStatus(
        "Your request has been sent. Our team will contact you."
      );

      setFormData({ ...INITIAL_FORM });

    } catch (error) {
      console.error("Google Sheets Error:", error);

      setSubmitStatus(
        "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="home-contact">
      <div className="home-wrap home-split">

        <div data-reveal>
          <h2 className="home-h2">
            Book a site inspection
          </h2>

          <p className="home-lead home-lead--dark">
            Tell us what you need and our team in Bikaner
            will get back to you.
          </p>

          <p>
            <strong>Address</strong>
            <br />
            {CONTACT_INFO.address}
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            <a
              className="home-underline"
              href={CONTACT_INFO.phoneHref}
            >
              {CONTACT_INFO.phone}
            </a>
          </p>

          <p>
            <strong>Email</strong>
            <br />
            <a
              className="home-underline"
              href={`mailto:${CONTACT_INFO.email}`}
            >
              {CONTACT_INFO.email}
            </a>
          </p>
        </div>

        <form
          className="home-form"
          onSubmit={handleSubmit}
          data-reveal
          style={{ "--i": 1 }}
        >
          <Field label="Full name" id="h-name">
            <input
              id="h-name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange("name")}
              autoComplete="name"
              maxLength={100}
            />
          </Field>

          <Field label="Phone / WhatsApp number" id="h-phone">
            <input
              id="h-phone"
              type="tel"
              inputMode="tel"
              required
              minLength={10}
              maxLength={15}
              value={formData.phone}
              onChange={handleChange("phone")}
              autoComplete="tel"
            />
          </Field>

          <Field label="Service needed" id="h-service">
            <select
              id="h-service"
              required
              value={formData.service}
              onChange={handleChange("service")}
            >
              <option value="" disabled>
                Select a service
              </option>

              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Property type" id="h-prop">
            <select
              id="h-prop"
              value={formData.property}
              onChange={handleChange("property")}
            >
              <option value="">Select (optional)</option>

              {PROPERTY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Area in Bikaner" id="h-area">
            <input
              id="h-area"
              type="text"
              value={formData.area}
              onChange={handleChange("area")}
              placeholder="e.g. Karni Industrial Area"
              maxLength={150}
            />
          </Field>

          {isFumigation && (
            <>
              <Field label="Commodity" id="h-com">
                <input
                  id="h-com"
                  type="text"
                  required
                  value={formData.commodity}
                  onChange={handleChange("commodity")}
                  placeholder="e.g. Chana"
                  maxLength={150}
                />
              </Field>

              <Field label="Quantity (MT)" id="h-qty">
                <input
                  id="h-qty"
                  type="number"
                  min="0"
                  step="any"
                  required
                  value={formData.quantity}
                  onChange={handleChange("quantity")}
                />
              </Field>
            </>
          )}

          <Field label="Message" id="h-msg">
            <textarea
              id="h-msg"
              rows="3"
              value={formData.message}
              onChange={handleChange("message")}
              maxLength={1000}
            />
          </Field>

          <button
            className="home-btn home-btn--dark"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>

          {submitStatus && (
            <p
              className="home-note"
              role="status"
              aria-live="polite"
            >
              {submitStatus}
            </p>
          )}

          <p className="home-note">
            Your details are used only to reply to this enquiry.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
