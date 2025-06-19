import React from 'react';
import { Clock, TrendingUp, ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const featuredArticle = {
    title: "Andrej Karpathy Delivers Groundbreaking AI Startup Lecture at Y Combinator",
    summary: "Former Tesla AI director and OpenAI co-founder shares insights on building AI applications that scale, covering everything from neural networks to production deployment strategies.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    link: "#",
    category: "Technology",
    readTime: "5 min read"
  };

  const recentNews = [
    {
      title: "Gen Z Protesters Mobilize Across Kenya for Democratic Reforms",
      date: "June 20, 2025",
      category: "Kenya Politics",
      trending: true
    },
    {
      title: "President Ruto Launches Affordable Housing Project in Nairobi's Eastlands",
      date: "June 19, 2025",
      category: "Kenya News"
    },
    {
      title: "Kenya Shilling Strengthens Against Dollar as Exports Rise",
      date: "June 18, 2025",
      category: "Business",
      trending: true
    },
    {
      title: "Safaricom Reports Record M-Pesa Transactions in Q2 2025",
      date: "June 17, 2025",
      category: "Technology"
    },
    {
      title: "Kenya Power Announces Major Grid Expansion to Rural Areas",
      date: "June 16, 2025",
      category: "Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => onNavigate('home')}
                className="text-xl font-bold hover:text-gray-300 transition-colors"
              >
                DailyNews Kenya
              </button>
            </div>
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => onNavigate('politics')}
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  Politics
                </button>
                <button 
                  onClick={() => onNavigate('sports')}
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  Sports
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenya's Leading News - Breaking Stories and Updates
          </h1>
          
          {/* Breaking News Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 border border-red-200 rounded-md mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 font-medium text-sm">Breaking News</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to DailyNews Kenya</h2>
          <p className="text-lg text-gray-600">Your source for the latest headlines from Kenya and beyond</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {featuredArticle.summary}
                </p>
                
                <a 
                  href={featuredArticle.link} 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Recent News Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                Recent News
              </h4>
              <div className="space-y-4">
                {recentNews.map((news, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-white rounded-lg p-3 -m-3 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                            news.category === 'Technology' ? 'bg-blue-100 text-blue-700' :
                            news.category === 'Kenya Politics' ? 'bg-red-100 text-red-700' :
                            news.category === 'Kenya News' ? 'bg-green-100 text-green-700' :
                            news.category === 'Business' ? 'bg-purple-100 text-purple-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {news.category}
                          </span>
                          {news.trending && (
                            <TrendingUp className="w-3 h-3 text-orange-500" />
                          )}
                        </div>
                        <h5 className="text-gray-900 font-medium leading-snug group-hover:text-blue-600 transition-colors">
                          {news.title}
                        </h5>
                        <p className="text-gray-500 text-sm mt-1">{news.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}