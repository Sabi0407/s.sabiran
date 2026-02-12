import { Monitor, Network, Container, Globe, Terminal, ShieldCheck } from "lucide-react"
import PDFPreview from "./pdf-preview"

const skills = [
  {
    icon: Monitor,
    title: "Systèmes d'exploitation",
    subtitle: "Windows / Linux",
    tags: ["Windows Server 2016/2019/2022", "Debian 11/12", "Ubuntu Server", "Active Directory", "GPO", "DHCP/DNS"],
  },
  {
    icon: Container,
    title: "Virtualisation & Conteneurisation",
    subtitle: "Proxmox / Docker",
    tags: ["Proxmox VE", "VirtualBox", "Docker", "Gestion des VMs", "Snapshots"],
  },
  {
    icon: Globe,
    title: "Services & Applications",
    subtitle: "Web / Base de données",
    tags: ["Apache2", "OpenSSL/TLS", "SSH", "GLPI", "Zabbix", "MariaDB", "MySQL"],
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & Supervision",
    subtitle: "Monitoring / Sécurisation",
    tags: ["Zabbix Monitoring", "Gestion des sauvegardes", "Sécurisation SSH", "Certificats SSL/TLS", "Analyse de logs"],
  },
]

export default function CompetencesSection() {
  return (
    <section id="competences" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-4">Compétences</h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground">{skill.title}</h3>
                    <p className="text-xs text-muted-foreground">{skill.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12">
          <p className="text-center text-sm text-muted-foreground mb-4">Documents</p>
          <div className="grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
            <PDFPreview 
              pdfUrl="/portfolio/CV_SRIKANTHAN_Sabiran.pdf" 
              title="Mon CV"
              description="Technicien Systèmes & Réseaux - Alternance Support N1"
            />
            <PDFPreview 
              pdfUrl="/portfolio/docs/tableau-e5-synthese.pdf" 
              title="Tableau E5"
              description="Synthèse des compétences BTS SIO SISR"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
