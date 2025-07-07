import React from 'react';
import { Clock, TrendingUp, ArrowRight, Vote, Users, Globe, Eye, MessageCircle, Share2 } from 'lucide-react';

interface PoliticsProps {
  onNavigate: (page: string) => void;
}

export default function Politics({ onNavigate }: PoliticsProps) {
  const politicalNews = [
    {
      title: "Gen Z Protesters Mobilize Across Kenya for Democratic Reforms",
      summary: "Young Kenyans take to the streets demanding greater transparency in government, anti-corruption measures, and increased youth representation in political processes.",
      image: "https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Youth Politics",
      readTime: "4 min read",
      date: "June 20, 2025",
      views: "15.2K",
      comments: 89
    },
    {
      title: "President Ruto Unveils Bottom-Up Economic Transformation Agenda",
      summary: "The President outlines comprehensive plans to empower small-scale farmers and micro-enterprises through targeted funding and policy reforms.",
      image: "https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "National Politics",
      readTime: "6 min read",
      date: "June 19, 2025",
      views: "12.8K",
      comments: 67
    },
    {
      title: "Kenya Signs Historic Trade Deal with East African Community Partners",
      summary: "New agreement promises to boost intra-regional trade and strengthen economic cooperation across the East African bloc.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "International Relations",
      readTime: "5 min read",
      date: "June 18, 2025",
      views: "9.4K",
      comments: 43
    }
  ];

  const quickUpdates = [
    {
      title: "Parliament Debates New Anti-Corruption Bill",
      time: "2 hours ago",
      category: "Legislature",
      priority: "high"
    },
    {
      title: "Governor Sakaja Launches Nairobi Digital City Initiative",
      time: "4 hours ago",
      category: "County Politics",
      priority: "medium"
    },
    {
      title: "Senate Committee Reviews Healthcare Funding Proposals",
      time: "6 hours ago",
      category: "Healthcare Policy",
      priority: "medium"
    },
    {
      title: "Deputy President Gachagua Tours Drought-Affected Counties",
      time: "8 hours ago",
      category: "National Affairs",
      priority: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl">
              <Vote className="w-10 h-10 text-red-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Kenya Politics
              </h1>
              <p className="text-xl text-gray-600">
                Stay informed with the latest political developments and government news
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Politics Content */}
          <div className="lg:col-span-2 space-y-8">
            {politicalNews.map((article, index) => (
              <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="aspect-video md:aspect-square overflow-hidden relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-red-200 text-red-700 rounded-full font-semibold">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{article.comments}</span>
                        </div>
                        <button className="hover:text-red-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Politics Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Updates */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                Live Updates
              </h3>
              <div className="space-y-6">
                {quickUpdates.map((update, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-red-50 rounded-xl p-4 -m-4 transition-all duration-300 border border-transparent hover:border-red-100">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-xs font-semibold">
                            {update.category}
                          </span>
                          {update.priority === 'high' && (
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <h4 className="text-gray-900 font-semibold leading-snug group-hover:text-red-600 transition-colors mb-2">
                          {update.title}
                        </h4>
                        <p className="text-gray-500 text-sm">{update.time}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Political Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                Categories
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'National Government', count: 24, icon: Globe, color: 'blue' },
                  { name: 'County Politics', count: 18, icon: Users, color: 'green' },
                  { name: 'Youth Politics', count: 12, icon: Vote, color: 'purple' },
                  { name: 'East Africa Relations', count: 15, icon: Globe, color: 'orange' }
                ].map((category, index) => (
                  <button key={index} className="w-full flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-xl transition-all duration-300 group border border-transparent hover:border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r from-${category.color}-100 to-${category.color}-200 rounded-lg`}>
                        <category.icon className={`w-5 h-5 text-${category.color}-600`} />
                      </div>
                      <span className="text-gray-700 group-hover:text-blue-600 font-semibold transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm font-medium">
                        {category.count}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}