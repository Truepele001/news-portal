import React from 'react';
import { Clock, TrendingUp, ArrowRight, Zap, Star, Eye } from 'lucide-react';

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
    readTime: "5 min read",
    views: "12.5K"
  };

  const recentNews = [
    {
      title: "Gen Z Protesters Mobilize Across Kenya for Democratic Reforms",
      date: "June 20, 2025",
      category: "Kenya Politics",
      trending: true,
      views: "8.2K"
    },
    {
      title: "President Ruto Launches Affordable Housing Project in Nairobi's Eastlands",
      date: "June 19, 2025",
      category: "Kenya News",
      views: "6.1K"
    },
    {
      title: "Kenya Shilling Strengthens Against Dollar as Exports Rise",
      date: "June 18, 2025",
      category: "Business",
      trending: true,
      views: "9.3K"
    },
    {
      title: "Safaricom Reports Record M-Pesa Transactions in Q2 2025",
      date: "June 17, 2025",
      category: "Technology",
      views: "7.8K"
    },
    {
      title: "Kenya Power Announces Major Grid Expansion to Rural Areas",
      date: "June 16, 2025",
      category: "Infrastructure",
      views: "5.4K"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kenya's Leading
              <span className="gradient-text block">News Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with breaking stories, in-depth analysis, and real-time updates from Kenya and beyond
            </p>
          </div>
          
          {/* Breaking News Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full shadow-elegant">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm uppercase tracking-wide">Breaking News</span>
              <Zap className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-gray-100">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">{featuredArticle.views}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {featuredArticle.views}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {featuredArticle.summary}
                </p>
                
                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Read Full Story
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Recent News Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 sticky top-24">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                Trending Now
              </h4>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-xl p-4 -m-4 transition-all duration-300 border border-transparent hover:border-blue-100">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            news.category === 'Technology' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700' :
                            news.category === 'Kenya Politics' ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-700' :
                            news.category === 'Kenya News' ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-700' :
                            news.category === 'Business' ? 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700' :
                            'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700'
                          }`}>
                            {news.category}
                          </span>
                          {news.trending && (
                            <div className="flex items-center gap-1 text-orange-500">
                              <TrendingUp className="w-3 h-3" />
                              <Star className="w-3 h-3 fill-current" />
                            </div>
                          )}
                        </div>
                        <h5 className="text-gray-900 font-semibold leading-snug group-hover:text-blue-600 transition-colors mb-2">
                          {news.title}
                        </h5>
                        <div className="flex items-center justify-between text-gray-500 text-sm">
                          <span>{news.date}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{news.views}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View All Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 transition-all duration-200">
                  View All Stories
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Daily Readers', value: '250K+', icon: Eye },
            { label: 'Stories Published', value: '1,200+', icon: Star },
            { label: 'Breaking News', value: '24/7', icon: Zap },
            { label: 'Years Trusted', value: '15+', icon: TrendingUp }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}