import packageJson from "../../package.json";

const rawName = (packageJson as any)?.name ?? "";

export const title: string = rawName
  ? rawName.charAt(0).toUpperCase() + rawName.slice(1)
  : "";