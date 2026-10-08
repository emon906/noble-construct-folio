import { Building2, Compass, Gem, Layers3, Ruler, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const statements = [
  { icon: Ruler, title: 'Built around quality and precision.', label: 'THE KD STANDARD' },
  { icon: Layers3, title: 'Thoughtful planning. Strong execution.', label: 'OUR APPROACH' },
  { icon: Gem, title: 'Designed for lasting value.', label: 'OUR VISION' },
  { icon: Building2, title: 'Professional construction solutions.', label: 'OUR FOCUS' },
  { icon: Compass, title: 'Architecture with purpose.', label: 'DESIGN THINKING' },
  { icon: ShieldCheck, title: 'Quality at every stage.', label: 'OUR PRINCIPLES' },
];

export function TrustExperience() {
  return <div className="trust-stage" aria-label="KD BUILDERS brand principles, not customer reviews">
    <div className="trust-perspective">{[0, 1, 2].map(column => <div className={`trust-column trust-column-${column}`} key={column}>
      {[...statements.slice(column * 2, column * 2 + 2), ...statements.slice(column * 2, column * 2 + 2), ...statements.slice(column * 2, column * 2 + 2)].map(({ icon: Icon, title, label }, index) => <Card className="trust-card" key={index} aria-hidden={index > 1 ? true : undefined}>
        <Avatar className="trust-icon"><AvatarFallback><Icon size={21} strokeWidth={1.3} /></AvatarFallback></Avatar>
        <h3>{title}</h3><span className="eyebrow">{label}</span>
      </Card>)}
    </div>)}</div>
  </div>;
}