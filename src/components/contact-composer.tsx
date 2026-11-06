"use client";

import { useState } from "react";

const destinations = {
  "General Inquiry": "contact@roayn.com",
  "Product Support": "support@roayn.com",
  "Business Inquiry": "business@roayn.com",
  "Partnership Inquiry": "business@roayn.com",
  Other: "contact@roayn.com",
} as const;

export function ContactComposer() {
  const [category, setCategory] = useState<keyof typeof destinations>("General Inquiry");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || message.trim().length < 20) {
      setError("Add your name, a valid email address, and a message of at least 20 characters.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`[${category}] ROAYN website inquiry`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\n${message}`);
    window.location.href = `mailto:${destinations[category]}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label><span>Name</span><input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required /></label>
        <label><span>Email</span><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" required /></label>
      </div>
      <label><span>Inquiry type</span><select value={category} onChange={(event) => setCategory(event.target.value as keyof typeof destinations)}>{Object.keys(destinations).map((item) => <option key={item}>{item}</option>)}</select></label>
      <label><span>Message</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={7} minLength={20} required /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary" type="submit">Open email draft</button>
      <p className="form-note">This static form opens your email application; it does not upload your message. The destination addresses require owner confirmation before public launch.</p>
    </form>
  );
}
