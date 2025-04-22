
import { Helmet as ReactHelmet } from "react-helmet";

interface HelmetProps {
  title: string;
  description?: string;
}

export function Helmet({ title, description }: HelmetProps) {
  return (
    <ReactHelmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </ReactHelmet>
  );
}
