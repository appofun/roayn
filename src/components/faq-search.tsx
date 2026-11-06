"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { faqs } from "@/content/support/articles";

export function FaqSearch() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return faqs.filter((faq) => !normalized || `${faq.category} ${faq.question} ${faq.answer}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <div>
      <label className="support-search">
        <Search aria-hidden="true" />
        <span className="sr-only">Search frequently asked questions</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search common questions" />
      </label>
      <div className="faq-list">
        {matches.map((faq) => (
          <details key={faq.question}>
            <summary><span><small>{faq.category}</small>{faq.question}</span><span aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        {!matches.length && <div className="no-results"><h3>No matching questions</h3><p>Try a broader search or use the contact page.</p></div>}
      </div>
    </div>
  );
}
