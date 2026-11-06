import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui";
import { supportArticles } from "@/content/support/articles";

export const dynamicParams = false;
export function generateStaticParams(){return supportArticles.map((article)=>({slug:article.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const article=supportArticles.find((item)=>item.slug===slug);if(!article)return{};return{title:article.title,description:article.summary,alternates:{canonical:`/support/${article.slug}/`}}}
export default async function SupportArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=supportArticles.find((item)=>item.slug===slug);if(!article)notFound();return <main><section className="article-hero"><div className="shell narrow-shell"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Support",href:"/support/"},{label:article.title}]}/><span className="eyebrow"><span/>{article.category}</span><h1>{article.title}</h1><p>{article.summary}</p><small>Updated {article.updated}</small></div></section><article className="section support-article"><div className="shell narrow-shell">{article.sections.map((section)=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.steps&&<ol>{section.steps.map((step)=><li key={step}><CheckCircle2/>{step}</li>)}</ol>}</section>)}<Link className="text-link" href="/support/"><ArrowLeft size={16}/>Back to support</Link></div></article></main>}
