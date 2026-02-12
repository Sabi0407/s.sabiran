"use client"

import { useState } from "react"
import { FileText, Download, X, ExternalLink } from "lucide-react"

interface PDFPreviewProps {
  pdfUrl: string
  title: string
  description?: string
}

export default function PDFPreview({ pdfUrl, title, description }: PDFPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/40 hover:shadow-md">
        <div
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <FileText size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading text-sm font-bold text-foreground">{title}</h4>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            aria-label={`Voir ${title}`}
          >
            <ExternalLink size={16} />
          </button>
          <a
            href={pdfUrl}
            download
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            aria-label={`Telecharger ${title}`}
          >
            <Download size={16} />
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="font-heading text-sm font-semibold text-foreground">{title}</span>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Download size={14} />
                  Telecharger
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <iframe src={pdfUrl} className="h-[calc(100%-52px)] w-full" title={title} />
          </div>
        </div>
      )}
    </>
  )
}
