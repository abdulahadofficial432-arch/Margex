export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-8 space-y-6 text-[#A0A0A0]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Margex, you accept and agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on Margex's website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a transfer of title, and under this license
                you may not:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Margex's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Trading Risks</h2>
              <p>
                Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor.
                The high degree of leverage can work against you as well as for you. Before deciding to trade, you should
                carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Account Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities
                that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Margex or its suppliers be liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                the materials on Margex's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Revisions</h2>
              <p>
                Margex may revise these terms of service at any time without notice. By using this website you are agreeing
                to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@margex.com
              </p>
            </section>

            <div className="pt-6 border-t border-[#1E1E1E]">
              <p className="text-sm text-[#666666]">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

