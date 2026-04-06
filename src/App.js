import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import './App.css';

const MindFlexWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const colors = {
    navyBlue: '#0f172a',
    darkNavy: '#0a0e27',
    forestGreen: '#1a4d2e',
    lightGold: '#d4af37',
    lightText: '#e8eef5',
    accentGold: '#f0c674',
  };

  // Navigation Links
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Apply', id: 'apply' },
    { label: 'Academics', id: 'academics' },
    { label: 'Cost', id: 'cost' },
    { label: 'Our Vision', id: 'vision' },
    { label: 'FAQs', id: 'faqs' },
  ];

  // Social Media Links
  const socialLinks = [
    { label: 'X', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'TikTok', url: '#' },
    { label: 'YouTube', url: '#' },
    { label: 'Facebook', url: '#' },
    { label: 'LinkedIn', url: '#' },
  ];

  // Page Components
  const HomePage = () => (
    <main className="flex-1">
      {/* Hero Video Section */}
      <div className="w-full h-96 md:h-screen bg-gradient-to-b from-emerald-900/20 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-60"
            style={{
              background: `linear-gradient(135deg, ${colors.navyBlue}, ${colors.forestGreen})`,
            }}
          >
            <source src="about:blank" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Expand Your Mind
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your thinking with Mind Flex's innovative education program
          </p>
        </div>
      </div>

      {/* Features Cards Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: colors.lightGold }}>
            Why Choose Mind Flex
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧠', title: 'Cognitive Growth', desc: 'Develop critical thinking skills' },
              { icon: '🎯', title: 'Goal Oriented', desc: 'Clear pathways to success' },
              { icon: '🌍', title: 'Global Community', desc: 'Connect with learners worldwide' },
              { icon: '📈', title: 'Proven Results', desc: 'Measurable progress and outcomes' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-700/30 rounded-lg p-8 hover:border-amber-600/50 transition-all duration-300 hover:shadow-xl"
                style={{ borderColor: `${colors.forestGreen}40` }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.accentGold }}>
                  {card.title}
                </h3>
                <p style={{ color: colors.lightText }} className="text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );

  const ApplyPage = () => (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 md:p-12 border border-emerald-700/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.lightGold }}>
            Ready to Transform Your Learning?
          </h1>
          <p className="mb-6 leading-relaxed" style={{ color: colors.lightText }}>
            Joining Mind Flex is the first step toward unlocking your potential. Our comprehensive application process helps us understand your goals and match you with the perfect learning pathway.
          </p>
          <p className="mb-8 leading-relaxed" style={{ color: colors.lightText }}>
            The application takes approximately 15-20 minutes to complete and includes questions about your background, learning objectives, and current skill level.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-slate-900 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: colors.accentGold }}
          >
            Start Application →
          </button>
        </div>
      </div>
    </main>
  );

  const AcademicsPage = () => (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: colors.lightGold }}>
          Our Academic Programs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Program 1', desc: 'Comprehensive curriculum' },
            { title: 'Program 2', desc: 'Advanced techniques' },
            { title: 'Program 3', desc: 'Specialized training' },
            { title: 'Program 4', desc: 'Expert mentorship' },
            { title: 'Program 5', desc: 'Real-world projects' },
            { title: 'Program 6', desc: 'Career acceleration' },
          ].map((program, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-emerald-700/30"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-700/40 to-amber-700/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.accentGold }}>
                  {program.title}
                </h3>
                <p style={{ color: colors.lightText }} className="text-sm">
                  {program.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );

  const CostPage = () => (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: colors.lightGold }}>
          Pricing & Costs
        </h1>
        <div className="overflow-x-auto rounded-lg border border-emerald-700/30">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: colors.forestGreen }}>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: colors.lightText }}>Program</th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: colors.lightText }}>Duration</th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: colors.lightText }}>Cost</th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: colors.lightText }}>Payment Plan</th>
                <th className="px-6 py-4 text-left font-semibold" style={{ color: colors.lightText }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: colors.navyBlue, borderBottom: `1px solid ${colors.forestGreen}40` }}>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>Essential</td>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>3 months</td>
                <td className="px-6 py-4" style={{ color: colors.accentGold }}>$499</td>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>Monthly</td>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>Core Skills</td>
              </tr>
              <tr style={{ backgroundColor: colors.navyBlue, borderBottom: `1px solid ${colors.forestGreen}40` }}>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>Professional</td>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>6 months</td>
                <td className="px-6 py-4" style={{ color: colors.accentGold }}>$899</td>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>Flexible</td>
                <td className="px-6 py-4" style={{ color: colors.lightText }}>Advanced+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );

  const VisionPage = () => (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 md:p-12 border border-emerald-700/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.lightGold }}>
            Our Vision
          </h1>
          <div className="space-y-6">
            <p style={{ color: colors.lightText }} className="leading-relaxed text-lg">
              Mind Flex envisions a world where education transcends traditional boundaries. We believe that every individual possesses unlimited potential for growth and transformation.
            </p>
            <p style={{ color: colors.lightText }} className="leading-relaxed text-lg">
              Our mission is to create a learning ecosystem that adapts to each student's unique journey, fostering critical thinking, creativity, and resilience. Through innovative curriculum design and compassionate mentorship, we empower learners to become architects of their own success.
            </p>
            <p style={{ color: colors.lightText }} className="leading-relaxed text-lg">
              Together, we're building a community of lifelong learners committed to personal excellence and meaningful contribution to society.
            </p>
          </div>
        </div>
      </div>
    </main>
  );

  const FAQsPage = () => (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: colors.lightGold }}>
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {[
            'What are the prerequisites for enrollment?',
            'How long does the program take?',
            'What support services are available?',
            'Can I transfer credits to other institutions?',
            'What is the schedule like?',
            'Do you offer financial assistance?',
            'Can I complete the program part-time?',
            'What happens after graduation?',
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 border-l-4"
              style={{ borderColor: colors.lightGold }}
            >
              <p className="font-semibold" style={{ color: colors.accentGold }}>
                • {faq}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'apply':
        return <ApplyPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'cost':
        return <CostPage />;
      case 'vision':
        return <VisionPage />;
      case 'faqs':
        return <FAQsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.darkNavy }}>
      {/* Header Navigation */}
      <header
        className="border-b sticky top-0 z-50"
        style={{ backgroundColor: colors.navyBlue, borderColor: `${colors.forestGreen}40` }}
      >
        <div className="px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-2xl" style={{ color: colors.accentGold }}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-900">
                🧠
              </div>
              <span>Mind Flex</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className="font-medium transition-colors duration-300 text-sm"
                  style={{
                    color: currentPage === link.id ? colors.lightGold : colors.lightText,
                    borderBottom: currentPage === link.id ? `2px solid ${colors.lightGold}` : 'none',
                    paddingBottom: currentPage === link.id ? '2px' : '0',
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== link.id) e.target.style.color = colors.accentGold;
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== link.id) e.target.style.color = colors.lightText;
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Login Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                style={{ color: colors.lightGold, border: `2px solid ${colors.lightGold}` }}
              >
                <LogIn size={18} />
                Login
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
                style={{ color: colors.lightText }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4" style={{ borderColor: `${colors.forestGreen}40` }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{
                    color: currentPage === link.id ? colors.lightGold : colors.lightText,
                    backgroundColor: currentPage === link.id ? `${colors.forestGreen}30` : 'transparent',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                className="w-full mt-4 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                style={{ color: colors.lightGold, border: `2px solid ${colors.lightGold}` }}
              >
                <LogIn size={18} />
                Login
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer
        className="border-t mt-16"
        style={{ backgroundColor: colors.navyBlue, borderColor: `${colors.forestGreen}40` }}
      >
        <div className="px-4 md:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Logo */}
              <div className="flex items-center gap-2 font-bold text-xl" style={{ color: colors.accentGold }}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-900">
                  🧠
                </div>
                <span>Mind Flex</span>
              </div>

              {/* Company News */}
              <div>
                <h3 className="font-semibold mb-3" style={{ color: colors.lightGold }}>
                  Company News
                </h3>
                <ul className="space-y-2" style={{ color: colors.lightText }}>
                  <li><a href="index.html" className="hover:text-amber-400 transition-colors text-sm">Latest Updates</a></li>
                  <li><a href="index.html" className="hover:text-amber-400 transition-colors text-sm">Press Releases</a></li>
                  <li><a href="index.html" className="hover:text-amber-400 transition-colors text-sm">Blog</a></li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="font-semibold mb-3" style={{ color: colors.lightGold }}>
                  Follow Us
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="text-sm font-medium transition-colors hover:text-amber-400"
                      style={{ color: colors.lightText }}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div
              className="border-t pt-8 text-center text-sm"
              style={{ color: colors.lightText, borderColor: `${colors.forestGreen}40` }}
            >
              <p>&copy; 2024 Mind Flex. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <MindFlexWebsite />;
}

export default App;
