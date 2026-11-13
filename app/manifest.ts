import type { MetadataRoute } from "next";
import { seo } from "./site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.title,
    short_name: seo.shortTitle,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#EEF2EC",
    theme_color: "#1F4D3D",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
