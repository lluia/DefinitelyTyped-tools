import { deserializeArgs } from "../common";
import { benchmark } from "./benchmark";
import { getPackagesToBenchmark } from "./getPackagesToBenchmark";
import { compare } from "./compare";
import { compareTypeScriptCLI } from "./compareTypeScript";

const entry = process.argv[2];
const args = deserializeArgs(process.argv.slice(3));
(async () => {
  try {
    switch (entry) {
      case "benchmark":
        return benchmark(args);
      case "getPackagesToBenchmark":
        return getPackagesToBenchmark(args);
      case "compare":
        return compare(args);
      case "compareTypeScript":
        return compareTypeScriptCLI(args);
      default:
        console.error(`Unrecognized entry '${entry}'`);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

process.on("unhandledRejection", err => {
  console.error(err);
  process.exit(1);
});
