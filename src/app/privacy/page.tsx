import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
export const metadata:Metadata={title:"Privacy Policy",description:"ROAYN corporate website privacy policy.",alternates:{canonical:"/privacy/"}};
const sections=[
  ["Scope","This policy describes the corporate website at roayn.com. Product-specific privacy notices will be linked from published product pages when applicable."],
  ["Data collected by this website","The initial static website does not provide accounts, a database, or a server-side contact form. Standard hosting infrastructure may process technical request data such as IP address, browser information, and request time for security and delivery."],
  ["Contact inquiries","The contact form prepares an email in the visitor’s own mail application. Information sent by email is processed to respond to the inquiry and maintain appropriate business records."],
  ["Cookies and analytics","No optional analytics or advertising cookies are intentionally configured in the initial release. If analytics are added later, this notice and any required consent controls should be updated before activation."],
  ["Third-party services","Links may lead to software marketplaces or other external services. Their privacy practices are governed by their own notices. No platform approval or partnership is implied."],
  ["Data retention","Email inquiries should be retained only as long as reasonably necessary for support, security, legal, or business-record purposes. A final retention schedule requires owner confirmation."],
  ["Your choices and rights","Depending on location, users may have rights relating to personal information. Requests can be prepared through the contact page. Identity verification may be required before action."],
  ["Children’s privacy","The corporate website is not designed to knowingly collect personal information from children. Product-specific notices should address age-related requirements where relevant."],
  ["Contact and updates","Privacy contact routing requires owner confirmation before public launch. This template has not been represented as legal advice or independently reviewed by counsel."],
] as const;
export default function PrivacyPage(){return <main><PageHero eyebrow="Legal" title="Privacy Policy" copy="A transparent starting point for the ROAYN corporate website. Items requiring operational confirmation are clearly identified."/><article className="section legal-page"><div className="shell narrow-shell"><div className="legal-meta"><span>Effective: owner confirmation required</span><span>Last updated: November 6, 2026</span></div>{sections.map(([title,text])=><section key={title}><h2>{title}</h2><p>{text}</p></section>)}<div className="legal-callout"><strong>Owner checklist</strong><p>Confirm contact inboxes, hosting logs, retention periods, analytics configuration, product data practices, and applicable legal requirements before treating this template as final.</p></div><p>For general inquiries, visit the <Link href="/contact/">contact page</Link>.</p></div></article></main>}
