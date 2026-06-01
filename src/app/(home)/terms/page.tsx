import { siteConfig } from "@/lib/site";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>
      <p className="mt-1 text-sm text-muted-foreground">Last updated: June 1, 2026</p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">1. Educational &amp; Personal Use Only</h2>
          <p>
            {siteConfig.name} is provided <strong>solely for educational and personal archival purposes</strong>.
            This tool allows you to download Instagram content that you already have access to for offline,
            private viewing. You may not use this service to infringe upon the intellectual property rights
            of others or to violate Instagram&apos;s Terms of Use.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">2. No Affiliation</h2>
          <p>
            {siteConfig.name} is <strong>not affiliated with, endorsed by, or connected to Instagram</strong> or
            Meta Platforms, Inc. All product names, logos, and brands are the property of their respective owners.
            Use of this service is at your own risk.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">3. User Responsibilities</h2>
          <p>By using this service, you agree that:</p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>You will only download content you have permission to access.</li>
            <li>You will respect copyright and will not redistribute downloaded content without the creator&apos;s consent.</li>
            <li>You will not use this service for commercial purposes or resale.</li>
            <li>You are solely responsible for any content you download and how you use it.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">4. Service Availability</h2>
          <p>
            We strive to keep {siteConfig.name} available, but we make no guarantees of uninterrupted or
            error-free service. We reserve the right to modify, suspend, or discontinue the service at any
            time without notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">5. Limitation of Liability</h2>
          <p>
            {siteConfig.name} and its creators shall not be liable for any damages arising from the use or
            inability to use this service. This includes, without limitation, direct, indirect, incidental,
            or consequential damages.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">6. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the service after changes constitutes
            acceptance of the new terms. It is your responsibility to review this page periodically.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">7. Contact</h2>
          <p>
            For questions about these terms, reach out via the Contact link in the footer.
          </p>
        </section>
      </div>
    </main>
  );
}
