# Next.js Auth.js Template

This project is a web application template with authentication features, using Next.js 14 and Auth.js. It incorporates modern web development best practices, enabling rapid development initiation.

## Key Features

- **Next.js 15(App Router)**: Utilizing the latest React framework
- **ESLint 9**: Latest version of ESLint (flat config)
- **Auth.js**: Easy implementation of a secure authentication system
- **Tailwind CSS**: Customizable utility-first CSS framework
- **shadcn/ui**: Functional UI components
- **Prisma**: Efficient database operations with a type-safe ORM
- **PostgreSQL**: Reliable relational database
- **Docker**: Database containerization for local development
- **T3 Env**: Type-safe environment variables with validation

## Setup Instructions

1. Clone the repository

   With create-next-app

   ```bash
   pnpm create next-app -e https://github.com/caru-ini/next-authjs-template
   ```

   or using GitHub CLI

   ```bash
   gh repo create <your-repo-name> --template https://github.com/caru-ini/next-authjs-template --clone
   ```

2. Install dependencies:

   ```bash
   pnpm i
   ```

3. Generate auth.js secret

   ```bash
   pnpm dlx auth@latest secret
   ```

4. Set up environment variables:
   Create a `.env.local` file and set the necessary environment variables:

   ```env
   AUTH_SECRET=your_auth_secret # already generated

   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
   AUTH_GITHUB_ID=your_github_id
   AUTH_GITHUB_SECRET=your_github_secret
   ```

5. Set up the database:

   ```bash
   docker-compose up -d
   ```

6. Run Prisma migrations:

   ```bash
   pnpm prisma:migrate
   ```

7. Start the development server:

   ```bash
   pnpm dev
   ```

## Deployment

Recommend [Vercel](https://vercel.com/) or [Coolify](https://coolify.io/) for deployment.

On coolify (or other self-hosted deployment platforms), you should set `AUTH_TRUST_HOST=true` in environment variables.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Auth.js](https://authjs.dev/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Docker](https://www.docker.com/)
- [T3 Env](https://github.com/t3-oss/t3-env)

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need assistance, please open an issue or contact the project maintainer directly.

## Star Us!

If you find this project useful, we'd greatly appreciate it if you could star our GitHub repository. Your support is a huge encouragement for us to continue improving and maintaining this project.
