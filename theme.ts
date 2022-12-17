import { buildLegacyTheme } from "sanity";

const props = {
  "--my-primary": "#666",
};

export const myTheme = buildLegacyTheme({
  /* Brand */
  "--brand-primary": "#666",

  /* Buttons */
  "--default-button-primary-color": props["--my-primary"],
});
