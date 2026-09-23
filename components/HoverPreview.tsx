"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FileText, FolderOpen } from "lucide-react";

type Preview = { title: string; description: string; detail: string; project: boolean; x: number; y: number; width: number };

// One shared window moves and resizes between targets instead of stacking tooltips.
export default function HoverPreview() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const reduced = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current: HTMLElement | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let described: HTMLElement | null = null;
    let previousDescription: string | null = null;
    const clearDescription = () => {
      if (described) {
        if (previousDescription === null) described.removeAttribute("aria-describedby");
        else described.setAttribute("aria-describedby", previousDescription);
      }
      described = null;
    };
    const close = () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      current = null;
      clearDescription();
      setPreview(null);
    };
    const show = (target: HTMLElement, immediate: boolean) => {
      clearTimeout(hideTimer);
      if (target === current) return;
      clearTimeout(timer);
      const wasOpen = current !== null;
      current = target;
      const render = () => {
        const project = !!target.closest("[data-preview-title]");
        const link = target.closest("a");
        const metadata = target.closest<HTMLElement>("[data-preview-title]");
        const url = link ? new URL(link.href, location.href) : null;
        const rect = target.getBoundingClientRect();
        const width = Math.min(280, innerWidth - 32);
        clearDescription();
        described = link ?? target;
        previousDescription = described.getAttribute("aria-describedby");
        described.setAttribute("aria-describedby", [previousDescription, "hover-preview"].filter(Boolean).join(" "));
        setPreview({
          title: metadata?.dataset.previewTitle || link?.getAttribute("aria-label") || link?.textContent?.trim() || "Open link",
          description: metadata?.dataset.previewDescription || (url?.protocol === "mailto:" ? "Start a conversation by email." : url?.pathname === "/resume.pdf" ? "View my résumé as a PDF." : url?.origin === location.origin ? (url.pathname === "/projects" ? "Browse all projects and experiments." : "Back to my portfolio.") : "Open in a new tab."),
          detail: metadata?.dataset.previewDetail || (url?.protocol === "mailto:" ? "Email" : url?.origin === location.origin ? url.pathname : url?.hostname || "Project"),
          project,
          width,
          x: Math.max(16, Math.min(rect.left, innerWidth - width - 16)),
          y: rect.bottom + 220 < innerHeight ? rect.bottom + 8 : Math.max(16, rect.top - 218),
        });
      };
      if (immediate || wasOpen) render();
      else timer = setTimeout(render, 140);
    };
    const targetFor = (node: EventTarget | null) => {
      const link = node instanceof Element ? node.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link) return null;
      const url = new URL(link.href, location.href);
      const isGitHub = url.hostname === "github.com" || url.hostname.endsWith(".github.com");
      return ["http:", "https:"].includes(url.protocol) && url.origin !== location.origin && !isGitHub ? link : null;
    };
    const over = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (panel.current?.contains(event.target as Node)) { clearTimeout(hideTimer); return; }
      const target = targetFor(event.target);
      if (target) show(target, false);
      else close();
    };
    const out = (event: PointerEvent) => {
      const next = event.relatedTarget;
      if (next instanceof Node && (current?.contains(next) || panel.current?.contains(next))) return;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(close, 120);
    };
    const focus = (event: FocusEvent) => {
      const target = targetFor(event.target);
      if (target) show(target, true);
      else close();
    };
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    document.addEventListener("focusin", focus);
    document.addEventListener("focusout", close);
    document.addEventListener("keydown", key);
    document.addEventListener("click", close);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearDescription();
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.removeEventListener("focusin", focus);
      document.removeEventListener("focusout", close);
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", close);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, []);

  if (typeof document === "undefined") return null;
  return createPortal(
    <AnimatePresence>
      {preview && (
        <motion.div ref={panel} id="hover-preview" role="tooltip" className="preview-window"
          layout={!reduced}
          initial={{ opacity: 0, scale: reduced ? 1 : .95 }}
          animate={{ opacity: 1, scale: 1, left: preview.x, top: preview.y, width: preview.width }}
          exit={{ opacity: 0, scale: reduced ? 1 : .97 }}
          style={{ left: preview.x, top: preview.y, width: preview.width, transformOrigin: "top left" }}
          transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 460, damping: 34 }}>
          <div className="preview-titlebar">{preview.project ? <FolderOpen size={13} /> : <FileText size={13} />}<span>{preview.title}</span></div>
          <motion.div key={preview.title} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: .14 }} className="preview-body">
            <p>{preview.description}</p>
            <p className="preview-detail">{preview.detail}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>, document.body,
  );
}
