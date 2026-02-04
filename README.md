This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration & Secrets

### EmailJS Setup (Contact Form)

This project uses EmailJS for the contact form. To ensure it works both locally and in production (GitHub Pages), you need to configure the following environment variables.

#### 1. Local Development
Create a file named `.env.local` in the root directory (this file is ignored by git for security) and add your keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

#### 2. Production (GitHub Pages)
Since `.env.local` is not uploaded to GitHub, you must configure these keys as "Secrets" in your repository settings so that the GitHub Action can allow them to be used during the build process.

1.  Go to your GitHub Repository.
2.  Click on **Settings** (tab at the top right).
3.  In the left sidebar, verify **Secrets and variables** -> **Actions**.
4.  Click on **New repository secret**.
5.  Add the three keys mentioned above with their respective values.
    *   Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, Secret: `...`
    *   Name: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, Secret: `...`
    *   Name: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, Secret: `...`

Once configured, the next deployment (push to main) will automatically pick up these values.
