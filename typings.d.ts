type responseStructured = {
  position?: string;
  country?: string;
  continent?: string;
}[];

type NotionResponse = {
  properties: {};
  Tags: { id: string; multi_select: [] };
  Status: { id: string; status: { id: string; name: string; color: string } };
  JobPosition: { id: string; title: [{ plain_text: string }] };
  Continent: { id: string; rich_text: [{ plain_text: string }] };
  Country: { title: [{ plain_text: string }] };
};

type SvgProps = {
  name?: string;
  color?: string;
  size?: string;
  height?: string;
  width?: string;
  blendMode?: string;
};

type ButtonProps = {
  text: string;
  variant: "text" | "outlined" | "contained";
  color: string;
  role?: string;
  "aria-label"?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  isSelected?: boolean;
};

type ContinentProps = {
  id: string;
  attributes: {
    Name: string;
    server_locations1: {
      data: {
        // map?: (() => ReactNode) | undefined;
      };
    };
  };
};

type ThemeProps = {
  children: JSX.Element;
};
