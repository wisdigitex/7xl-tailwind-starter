export default function App() {
  return (
    <div className="bg-black text-white">
      {/* Top Header Bar */}
      <div className="bg-zinc-950 text-sm text-white px-4 py-2 flex justify-between items-center">
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold">
          ⬇ Download
        </button>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Tutorial Videos</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Website Terms and Conditions</a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-black px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white font-sans tracking-wide drop-shadow-sm">
  <span className="text-red-500">יהודה</span> <span className="text-gray-300">פוליקר</span>
</div>


        {/* Navigation Links */}
        <nav className="space-x-6 text-white text-sm font-medium">
          <a href="#" className="hover:text-red-500">BLOG</a>
          <a href="#" className="hover:text-red-500">LEARN POKER</a>
          <a href="#" className="hover:text-red-500">GGTEAM</a>
          <a href="#" className="hover:text-red-500">ONLINE CASINO</a>
          <a href="#" className="hover:text-red-500">ONLINE POKER</a>
          <a href="#" className="hover:text-red-500">AGENT 7XL</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-extrabold text-center mb-4">יהודה פוליקר Online Poker and Casino</h1>
        <p className="text-lg text-gray-400 text-center mb-6">Join top players and win real money with every game.</p>
        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">Play Now</button>
          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">Download App</button>
        </div>
      </div>

      {/* Giveaway Section */}
      <section className="text-center py-10 px-4 bg-zinc-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400">
          7XL is giving away over $10M in monthly prizes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Fish Party", img: "/game1.jpg" },
            { title: "Omaha Poker", img: "/game2.jpg" },
            { title: "Blackjack Live", img: "/game3.jpg" },
            { title: "Slots Royale", img: "/game4.jpg" },
          ].map((game, idx) => (
            <div key={idx} className="bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img src={game.img} alt={game.title} className="w-full h-48 object-contain bg-black" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose 7XL Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose 7XL</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Instant Withdrawals",
              icon: "⚡",
              desc: "Your winnings are sent instantly — no delays, no waiting.",
            },
            {
              title: "VIP Rewards",
              icon: "🏆",
              desc: "Exclusive bonuses and rakebacks for our loyal high-rollers.",
            },
            {
              title: "Secure Platform",
              icon: "🛡️",
              desc: "Military-grade encryption and fair play guarantees.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Game Categories Section */}
<section className="py-16 px-4 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-center text-white">
  <h2 className="text-2xl md:text-3xl font-bold mb-10">Online Poker and Casino Games 7XL</h2>
  <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
    {[
      { title: "Texas Hold'em", icon: "♠️" },
      { title: "Omaha", icon: "♦️" },
      { title: "Blackjack", icon: "🂡" },
      { title: "Roulette", icon: "🎯" },
      { title: "Baccarat", icon: "🎴" },
      { title: "Slots", icon: "🎰" },
      { title: "Teen Patti", icon: "🃏" },
      { title: "Andar Bahar", icon: "🎲" },
    ].map((game, idx) => (
      <div
        key={idx}
        className="bg-zinc-800 hover:bg-zinc-700 transition p-4 rounded-lg w-32 h-32 flex flex-col justify-center items-center shadow-md"
      >
        <div className="text-3xl mb-2">{game.icon}</div>
        <p className="text-sm font-medium">{game.title}</p>
      </div>
    ))}
  </div>
</section>
{/* App Download Section */}
<section className="py-16 bg-zinc-900 text-center text-white px-4">
  <h2 className="text-2xl md:text-3xl font-bold mb-6">7XL Download</h2>
  <p className="mb-6 text-gray-400">Download the app for a smoother casino experience</p>
  <div className="flex flex-wrap justify-center gap-6">
    <img src="/appstore.png" alt="App Store" className="w-40 h-auto" />
    <img src="/googleplay.png" alt="Google Play" className="w-40 h-auto" />
    <img src="/apkdownload.png" alt="APK" className="w-40 h-auto" />
  </div>
</section>
{/* Deposit and Withdrawal Section */}
<section className="py-16 px-6 bg-black text-white text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-10">7XL Deposit and Withdrawal</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-zinc-900 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-red-500">Deposit Methods</h3>
      <p className="text-gray-400 text-sm">Choose from a wide range of deposit methods including crypto, credit card, Payoneer, and more.</p>
    </div>
    <div className="bg-zinc-900 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-green-500">Fast Payouts</h3>
      <p className="text-gray-400 text-sm">Withdraw your winnings quickly with no hidden fees. Trusted worldwide.</p>
    </div>
  </div>
  <div className="mt-8 flex flex-wrap justify-center gap-4">
    {["visa", "paypal", "btc", "usdt", "skrill"].map((icon, idx) => (
      <div key={idx} className="w-12 h-12 bg-white text-black flex items-center justify-center rounded shadow text-xs font-bold uppercase">
        {icon}
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
