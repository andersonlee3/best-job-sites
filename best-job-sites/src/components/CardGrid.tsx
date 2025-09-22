import type { ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
}

function CardGrid({ children }: CardGridProps) {
  return <div className="card-grid">{children}</div>;
}

export default CardGrid;
