import { siteConfig } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-1 text-sm text-muted-foreground">Last updated: June 1, 2026</p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">1. Information We Collect</h2>
          <p>
            {siteConfig.name} <strong>does not collect, store, or log any personal information</strong>.
            We do not require registration, accounts, or email addresses to use this service.
          </p>
          <p>
            When you use the download feature, the Instagram URL you provide is processed in real time
            and is <strong>not stored on any server</strong>. Video files are proxied through our server
            temporarily and are never retained after delivery.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">2. Data We Automatically Handle</h2>
          <p>
            Like most websites, our server may temporarily process technical data such as your IP address
            and browser user-agent for the sole purpose of delivering the service. This data is
            <strong> not logged, stored, or shared</strong> with any third party.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">3. Cookies</h2>
          <p>
            {siteConfig.name} uses minimal cookies solely for technical functionality (e.g., theme
            preference). We do not use tracking cookies, advertising cookies, or analytics cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">4. Third-Party Services</h2>
          <p>
            We use Vercel for hosting. Vercel may process data in accordance with their own privacy
            policy. We do not embed third-party trackers, ads, or analytics scripts on this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">5. Your Rights</h2>
          <p>
            Because we collect no personal data, there is nothing to access, correct, or delete. If you
            have concerns, you may contact us — we will never ask for personal information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">6. Changes to This Policy</h2>
          <p>
            We may update this policy as needed. Changes will be posted on this page with an updated
            &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">7. Contact</h2>
          <p>
            Questions about this policy? Reach out via the Contact link in the footer.
          </p>
        </section>
      </div>
    </main>
  );
}
