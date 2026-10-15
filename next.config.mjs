import { lstatSync } from 'node:fs';
import path from 'node:path';
// Local workspace can share dependencies with its sibling portfolio.
// A normal npm ci uses the application directory as the root.
const linkedDependencies = lstatSync(path.join(process.cwd(), 'node_modules')).isSymbolicLink();
export default { turbopack: { root: linkedDependencies ? path.resolve(process.cwd(), '..') : process.cwd() } };
