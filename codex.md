## Language Profiles Overview

This file defines **language and stack-specific standards**.  
Each language/framework gets its own profile; you can add new ones over time without changing existing sections.

When adding a new language or stack, follow the template below.

### Language Profile Template (copy for new languages)

```md
### <Language / Stack Name> (Profile ID: <SOME_IDENTIFIER>)

#### Design goals
- Short bullet list of what this profile optimizes for (e.g., “API-first backend”, “small marketing site”, “high-throughput jobs”).

#### Versions & tooling
- Runtime version policy (e.g., “use current LTS and pin in config”).
- Core tools (linters, formatters, test runners, build tools).

#### Project structure
- Expected folder layout for this language/stack.

#### Code style & conventions
- Naming rules, module patterns, logging standards, error-handling rules, etc.

#### Testing strategy
- What to test, which tools, and minimum coverage or priority areas.

#### Security & environment
- How to handle secrets, input validation, and any stack-specific security practices.
```

Below is the **JavaScript / TypeScript web stack profile** used by this portfolio.  
You can add more profiles (e.g., `Python / FastAPI`, `Go / REST API`) by copying the template.

---

### JavaScript / TypeScript Web Stack (Profile ID: JS_WEB_APP)

#### Design goals
- when designing always try and reference this site for different ideas that seem to match the users goal. https://land-book.com/design/
- there are different sections so try and use the proper section when doing design.
- Simple, maintainable full-stack web apps for small-business/portfolio use.
- Clear separation between frontend (React + Tailwind) and backend (Express + Prisma + PostgreSQL).
- Easy onboarding: a new developer should understand layout and standards in under an hour.

#### Versions & tooling

- **Runtime**
  - Use the current Node.js LTS at project creation; pin in `package.json` (`engines`) and `.nvmrc`/`.node-version`.
  - Prefer ES modules; avoid CommonJS unless a dependency forces it.

- **Language**
  - JavaScript is default; TypeScript is recommended for complex or shared logic.
  - If TypeScript is used:
    - Enable `strict` mode.
    - Avoid `any`; use precise types or generics.
    - Keep shared types in a dedicated `types` or `@/types` module.

- **Tooling**
  - **ESLint**: single shared config for frontend and backend (base + React + import rules + security rules).
  - **Prettier**: one config; Prettier handles formatting, ESLint handles correctness/best practices.
  - Group imports as `stdlib` / `third-party` / `local` with consistent ordering.

#### Code style & conventions

- **Naming**
  - Functions: descriptive verbs (e.g. `calculateUserMonthlySubscriptionTotal`).
  - Classes: nouns (e.g. `UserManager`, `PaymentProcessor`).
  - Constants: `UPPER_SNAKE_CASE`.

- **Error handling**
  - Never swallow errors silently; always log with context.
  - Prefer custom error classes (e.g. `ValidationError`, `NotFoundError`) over bare `Error` for domain cases.

- **Logging**
  - Every non-trivial function (I/O, DB, network) logs:
    - Entry with key parameters (no secrets).
    - Exit with success summary and/or key result metadata.
    - Errors with stack trace.
  - Use a centralized logger utility (can wrap `console` initially; upgradable to `pino`/`winston`).

---

### Frontend: React + Tailwind (Profile ID: JS_REACT_TAILWIND)

#### Project structure

- Feature-first under `src/`, for example:
  - `src/app` or `src/pages`: top-level routing/pages.
  - `src/features/<featureName>`: self-contained UI + state + tests for each feature.
  - `src/components`: truly shared, generic components only.
  - `src/hooks`, `src/lib` or `src/utils`: shared logic that is not UI.
- Keep components small and focused; if a component grows beyond ~150 lines or has multiple concerns, split it.

#### Components & hooks

- Functional components only; use hooks, no class components.
- Prefer local state first, then context, then external state management only if actually needed.
- Extract reusable logic into custom hooks (`useSomethingDescriptive`) with clear input/output contracts.
- Always handle loading, empty, and error states explicitly for async data.

#### Tailwind usage

- Use Tailwind utility classes in JSX for most styling; avoid separate CSS files unless necessary (e.g. 3rd party overrides).
- Use helper utilities (e.g. `clsx`) for conditional class names instead of string concatenation.
- When a set of Tailwind classes is reused frequently, extract a component or small utility to avoid duplication.
- Keep Tailwind config (`tailwind.config.*`) minimal but branded:
  - Define color palette, spacing, typography, and any shared component styles used across the portfolio.

#### Accessibility & UX

- All interactive elements must be keyboard accessible and have appropriate ARIA attributes if semantics are not obvious.
- Use semantic HTML first; only add ARIA when needed.
- Ensure color contrast meets WCAG AA; verify when introducing new colors or designs.
- Form inputs must have associated labels; error states must be clearly communicated visually and via screen readers.

---

### Backend: Express + Prisma + PostgreSQL (Profile ID: JS_EXPRESS_PRISMA_PG)

#### Project structure

- Recommended layout:
  - `src/server.(js|ts)` or `src/index.(js|ts)`: process startup and HTTP server bootstrap.
  - `src/app.(js|ts)`: Express app creation, middleware, route mounting.
  - `src/routes`: route definitions (HTTP method + path + wiring to controllers).
  - `src/controllers`: translate HTTP request/response to/from domain layer.
  - `src/services`: business logic and orchestration.
  - `src/repositories` or `src/data`: Prisma data access and DB-specific logic.
  - `src/middleware`: shared Express middleware (auth, logging, error handling).
  - `src/config`: environment/configuration loading and validation.

#### Express patterns

- Never access `req`/`res` directly inside domain logic; keep them in controllers and middleware only.
- Use centralized error-handling middleware to map errors to HTTP responses.
- Validate all incoming input:
  - Params, query, and body must be validated at the edge with a schema validation library.
  - Reject invalid payloads with appropriate HTTP codes and clear error messages.
- Enforce a consistent API response shape (e.g. `{ success, data, error }`).

#### Prisma usage

- Single Prisma schema (`schema.prisma`) is the source of truth for data models.
- Use migrations (`prisma migrate`) to evolve the database; avoid `db push` for production.
- Encapsulate Prisma client in a single module (e.g. `src/prisma/client.(js|ts)`) to:
  - Reuse one client instance per process.
  - Simplify mocking in tests.
- Use transactions for multi-step operations that must remain consistent.
- Prefer Prisma’s query APIs and relations; only use raw SQL when necessary, always with parameterization.

#### PostgreSQL conventions

- Use a single connection URL from environment variables; never hardcode credentials.
- Use descriptive, consistent naming for tables/columns (snake_case in DB, mapped to camelCase in code via Prisma).
- Store timestamps in UTC; convert to local time in the UI layer only.
- Avoid storing secrets or highly sensitive data in plaintext; use hashing/encryption where needed.

---

### Security & Environment (Shared for JS Profiles)

#### Environment configuration

- All secrets and environment-specific values live in `.env` (or similar) and are never committed.
- Provide `.env.example` with all required variables and safe defaults where possible.
- Application must fail fast on startup if required environment variables are missing or invalid.

#### Security basics

- Always validate and sanitize user input on the server.
- Use parameterized queries via Prisma (no string-concatenated SQL).
- Enable basic security headers (e.g. Express + `helmet`).
- Configure CORS explicitly, only allowing known origins for production.
- If authentication is added:
  - Use secure password hashing (e.g. bcrypt, argon2).
  - Store only hashed passwords and short-lived tokens.
  - Protect sensitive routes with appropriate middleware.
  - Design for sql injection attacks.
  - Design for xss attacks.
  - Design for csrf attacks.
  - Design for clickjacking attacks.
  - Design for file inclusion attacks.
  - Design for directory traversal attacks.
  - Design for remote code execution attacks.
  - Design for sql injection attacks.
  - Design for xss attacks.

---

### Testing Strategy (JS_WEB_APP)

#### Frontend (React)

- Use Jest or Vitest with React Testing Library for unit and integration tests.
- Focus tests on user-visible behavior and component contracts, not internal implementation details.
- Snapshot tests only for stable, simple components where they add real value.

#### Backend (Express + Prisma)

- Use Jest or Vitest and `supertest` (or similar) for HTTP-level tests.
- Unit tests cover:
  - Services and business logic (mocking repositories/Prisma).
  - Controllers with mocked services.
- Integration tests:
  - Run against a real PostgreSQL instance (often Docker) with migrations applied.
  - Use a separate test database/schema and clean up state between tests.

#### End-to-end

- Use Playwright for browser-based E2E tests:
  - Cover core user journeys (landing page, contact flow, key navigation).
  - Use MCP tools to take screenshots and capture console logs when debugging failures.

Testing targets from the general section still apply: aim for ~70% unit coverage and ~70% E2E coverage on non-trivial features, prioritizing high-value paths first.
