interface ExperienceItemProps {
  company: string;
  role: string;
  year: string;
  icon: string;
}

const ExperienceItem = ({ company, role, year, icon }: ExperienceItemProps) => (
  <div className="flex items-center gap-4 py-3 border-b border-border last:border-0">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-lg">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold leading-tight">{company}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
    <span className="text-sm text-muted-foreground shrink-0">{year}</span>
  </div>
);

export default ExperienceItem;
