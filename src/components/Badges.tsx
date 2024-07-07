import { TypographySmall } from "./typography";
import { Badge } from "./ui/badge";

export default function Badges({
  items,
  title,
}: {
  items: { name: string }[];
  title?: string;
}) {
  return (
    <div>
      {title && <TypographySmall>{title}</TypographySmall>}
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((item) => {
          const { name } = item;
          return <Badge variant="outline">{name}</Badge>;
        })}
      </div>
    </div>
  );
}
