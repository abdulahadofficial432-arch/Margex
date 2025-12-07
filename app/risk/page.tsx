import { AlertTriangle } from 'lucide-react'

export default function RiskPage() {
  const risks = [
    {
      title: 'Market Risk',
      description: 'Cryptocurrency markets are highly volatile and can experience significant price fluctuations. Prices can move rapidly and unpredictably, potentially resulting in substantial losses.',
    },
    {
      title: 'Leverage Risk',
      description: 'Trading with leverage amplifies both profits and losses. While leverage can increase potential returns, it also increases the risk of significant losses, including the loss of your entire investment.',
    },
    {
      title: 'Liquidity Risk',
      description: 'Some trading pairs may have limited liquidity, which can result in wider spreads, slippage, and difficulty executing trades at desired prices.',
    },
    {
      title: 'Technical Risk',
      description: 'Technical issues, system failures, or network problems may prevent you from accessing your account or executing trades, potentially resulting in losses.',
    },
    {
      title: 'Regulatory Risk',
      description: 'Cryptocurrency regulations vary by jurisdiction and may change. Regulatory actions could affect the availability or operation of our services in certain regions.',
    },
    {
      title: 'Counterparty Risk',
      description: 'While we take measures to secure our platform, there is always a risk of security breaches, hacking, or other malicious activities that could result in loss of funds.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FF4444]/10 border border-[#FF4444] rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[#FF4444] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Important Risk Warning</h2>
              <p className="text-[#A0A0A0]">
                Trading cryptocurrencies with leverage involves substantial risk of loss and is not suitable for all investors.
                You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge,
                and financial resources. You may lose some or all of your invested capital.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-8">Risk Disclosure</h1>
        <div className="space-y-6">
          {risks.map((risk, index) => (
            <div key={index} className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">{risk.title}</h2>
              <p className="text-[#A0A0A0]">{risk.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#141414] border border-[#1E1E1E] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Risk Management Recommendations</h2>
          <ul className="space-y-3 text-[#A0A0A0]">
            <li className="flex items-start gap-3">
              <span className="text-[#00D9FF]">•</span>
              <span>Only trade with funds you can afford to lose</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D9FF]">•</span>
              <span>Use stop-loss orders to limit potential losses</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D9FF]">•</span>
              <span>Start with lower leverage until you gain experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D9FF]">•</span>
              <span>Diversify your portfolio to spread risk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D9FF]">•</span>
              <span>Keep up to date with market news and analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D9FF]">•</span>
              <span>Never invest more than you can afford to lose</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-[#1E1E1E] rounded-lg">
          <p className="text-[#A0A0A0] text-sm">
            By using Margex, you acknowledge that you have read, understood, and agree to this Risk Disclosure.
            You understand the risks involved in cryptocurrency trading and accept full responsibility for your trading decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

