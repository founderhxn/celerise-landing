export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Celerise
          </h1>
          <p className="text-xl text-gray-300 mb-16">
            Building the future of fitness technology
          </p>

          {/* Delta Product Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 mb-16 border border-white/20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Delta
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Progressive Overload Workout Tracker
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Track your workouts, build routines, and achieve your fitness goals with intelligent progressive overload tracking.
            </p>
            <a
              href="https://apps.apple.com/app/delta"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all transform hover:scale-105 text-lg"
            >
              Download on App Store
            </a>
          </div>

          {/* Footer */}
          <div className="text-gray-400 text-sm space-x-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="mailto:team@celerise.app" className="hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
