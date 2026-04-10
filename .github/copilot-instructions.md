# Monorepo Setup Context - AWS TypeScript CDK Serverless React

## Overview
This is a **pnpm monorepo** using **Turbo** as the build orchestrator. It's structured to manage multiple TypeScript applications and shared configuration packages in a single repository.

## Why Monorepo + pnpm + Turbo?

### Benefits over single npm project:
1. **Code Reusability**: Shared configs (ESLint, TypeScript) across all apps
2. **Dependency Management**: Single lockfile (`pnpm-lock.yaml`) for the entire monorepo
3. **Efficient Builds**: Turbo only rebuilds what changed
4. **Workspace Isolation**: Each package is independent but interconnected

---

## Project Structure

```
aws-typescript-cdk-serverless-react/
├── apps/                          # Applications
│   ├── basics/                   # Basic TypeScript app
│   ├── cdk-starter/              # CDK starter app
│   ├── space-finder/             # Space finder service
│   └── space-finder-frontend/    # Space finder UI
├── packages/                      # Shared configurations
│   ├── eslint-config/           # Shared ESLint config (@repo/eslint-config)
│   ├── typescript-config/       # Shared TypeScript config (@repo/typescript-config)
│   └── ui/                      # Shared UI components
├── pnpm-workspace.yaml          # Workspace configuration
├── turbo.json                   # Turbo build configuration
└── package.json                 # Root scripts
```

---

## Package Manager: pnpm

**Why pnpm over npm?**
- **Faster**: Better caching mechanism
- **Disk efficient**: Hard links instead of copies
- **Strict dependency resolution**: Prevents phantom dependencies
- **Workspace support**: Native monorepo support

**Root package.json scripts:**
```json
{
  "scripts": {
    "build": "turbo run build",      // Build all apps
    "dev": "turbo run dev",          // Run dev mode in all apps
    "test": "turbo run test",        // Run tests in all apps
    "lint": "turbo run lint",        // Lint all apps
    "format": "prettier --write",    // Format code
    "check-types": "turbo run check-types"  // Type check all apps
  }
}
```

---

## App Structure

Each app (basics, cdk-starter, space-finder, space-finder-frontend) has:

**package.json scripts:**
```json
{
  "scripts": {
    "build": "tsc",                  // Compile TypeScript
    "start": "ts-node src/index.ts", // Run the app
    "dev": "ts-node src/index.ts",   // Development mode
    "test": "vitest",                // Run tests
    "lint": "eslint src",            // Lint code
    "format": "prettier --write",    // Format code
    "check-types": "tsc --noEmit"   // Type checking only
  }
}
```

**tsconfig.json:**
- Extends `@repo/typescript-config/base` (shared config from packages/)
- Each app overrides specific settings (outDir, rootDir)

**eslint.config.js:**
- Extends `@repo/eslint-config/base` (shared config from packages/)
- Ensures consistent linting across all apps

---

## Turbo Configuration (turbo.json)

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"],
      "cache": false
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "test": {
      "dependsOn": ["^build"],
      "cache": false
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

**Key concepts:**
- `dependsOn: ["^build"]` = run dependencies' build first
- `cache: false` = never cache this task (important for lint/test)
- `persistent: true` = keep running in dev mode

---

## How It Works

### 1. Install dependencies
```bash
pnpm install  # Installs all dependencies for all apps and packages
```

### 2. Run scripts at root level (runs in all apps via Turbo)
```bash
pnpm test          # Runs vitest in all 4 apps
pnpm build         # Compiles TypeScript in all 4 apps
pnpm lint          # Lints all 4 apps using shared config
pnpm format        # Formats code in all files
pnpm check-types   # Type checks all apps
```

### 3. Run scripts in specific app
```bash
cd apps/basics
pnpm build         # Only builds basics app
pnpm test          # Only tests basics app
```

---

## Shared Configurations (packages/)

### @repo/eslint-config
- **base.js**: Core ESLint rules for all apps
- **Exports**: base, next-js, react-internal
- **Used by**: All apps via `eslint.config.js`

### @repo/typescript-config
- **base.json**: Core TypeScript compiler options
- **Exports**: base, nextjs, react-library
- **Used by**: All apps via `extends` in tsconfig.json

### @repo/ui
- Shared React components (not currently used by apps)

---

## Is This Setup Compatible with Learning npm-only Courses?

### ✅ YES - Here's why:

1. **Individual apps still use npm scripts**
   - Each app has `package.json` with standard npm scripts
   - You can `cd apps/basics && pnpm run build` just like npm
   - The scripts themselves are identical to npm projects

2. **Turbo is optional**
   - You can ignore Turbo and run commands in individual apps
   - Turbo just orchestrates multiple apps efficiently
   - Course concepts still apply to each individual app

3. **Each app is standalone**
   - Each app has its own `package.json`, `tsconfig.json`, `vitest.config.ts`
   - If extracted, each app could work in a separate repository
   - Course learnings apply 1:1 to individual apps

4. **TypeScript/JavaScript concepts are identical**
   - All TypeScript/JS fundamentals are the same
   - The course code will work in individual app directories
   - pnpm is just a faster npm replacement (same API)

### 📝 How to follow the course:

**Option 1: Work within an app**
```bash
cd apps/basics
# Follow course tutorials in this directory
pnpm run build
pnpm run test
pnpm run lint
```

**Option 2: Stay at root level**
```bash
# Use Turbo to run commands across all apps
pnpm run build
pnpm run test
# These are equivalent to running individual npm commands
```

---

## Technology Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **pnpm** | 9.0.0 | Package manager |
| **Turbo** | 2.9.5 | Build orchestrator |
| **TypeScript** | 5.9.2 | Language |
| **Node** | ≥18 | Runtime |
| **Vitest** | 4.1.3 | Test runner |
| **ESLint** | 9.39.1 | Linter |
| **Prettier** | 3.7.4 | Code formatter |

---

## Summary

**Your setup:**
- ✅ Modern, scalable monorepo
- ✅ Consistent configurations across apps
- ✅ Efficient builds with Turbo
- ✅ Fast dependency management with pnpm
- ✅ Fully compatible with npm-based course tutorials

**You're good to proceed!** The course concepts will apply directly to your apps. Monorepo structure just provides better organization and reusability.
