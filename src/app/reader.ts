import { keystaticConfig } from "@/common/libs/keystatic/keystatic.config";
import { createReader } from "@keystatic/core/reader";

export const reader = createReader(process.cwd(), keystaticConfig);
