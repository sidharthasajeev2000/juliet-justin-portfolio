"use client";
import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
    } else {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io!.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      els.forEach((e) => io!.observe(e));
    }
    const bar = document.getElementById("progress");
    const nav = document.getElementById("nav");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        const h = root.scrollHeight - innerHeight;
        if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
        nav?.classList.toggle("scrolled", scrollY > 20);
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-navlink]"));
    const so = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.hash === `#${en.target.id}`)); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const s = document.querySelector(l.hash); if (s) so.observe(s); });
    return () => { io?.disconnect(); so.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);
  return null;
}
