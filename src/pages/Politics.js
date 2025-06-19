import React from 'react';
import { Clock, TrendingUp, ArrowRight, Vote, Users, Globe } from 'lucide-react';

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
      date: "June 20, 2025"
    },
    {
      title: "President Ruto Unveils Bottom-Up Economic Transformation Agenda",
      summary: "The President outlines comprehensive plans to empower small-scale farmers and micro-enterprises through targeted funding and policy reforms.",
      image: "https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "National Politics",
      readTime: "6 min read",
      date: "June 19, 2025"
    },
    {
      title: "Kenya Signs Historic Trade Deal with East African Community Partners",
      summary: "New agreement promises to boost intra-regional trade and strengthen economic cooperation across the East African bloc.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "International Relations",
      readTime: "5 min read",
      date: "June 18, 2025"
    }
  ];

  const quickUpdates = [
    {
      title: "Parliament Debates New Anti-Corruption Bill",
      time: "2 hours ago",
      category: "Legislature"
    },
    {
      title: "Governor Sakaja Launches Nairobi Digital City Initiative",
      time: "4 hours ago",
      category: "County Politics"
    },
    {
      title: "Senate Committee Reviews Healthcare Funding Proposals",
      time: "6 hours ago",
      category: "Healthcare Policy"
    },
    {
      title: "Deputy President Gachagua Tours Drought-Affected Counties",
      time: "8 hours ago",
      category: "National Affairs"
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
                  className="text-blue-300 font-medium border-b-2 border-blue-300 pb-1"
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
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Vote className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kenya Politics
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Stay informed with the latest political developments, policy changes, and government news from Kenya
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Politics Content */}
          <div className="lg:col-span-2 space-y-8">
            {politicalNews.map((article, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.summary}
                    </p>
                    
                    <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Politics Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Updates */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                Quick Updates
              </h3>
              <div className="space-y-4">
                {quickUpdates.map((update, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-white rounded-lg p-3 -m-3 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium mb-2 inline-block">
                          {update.category}
                        </span>
                        <h4 className="text-gray-900 font-medium leading-snug group-hover:text-blue-600 transition-colors">
                          {update.title}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">{update.time}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Political Categories */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                Categories
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'National Government', count: 24, icon: Globe },
                  { name: 'County Politics', count: 18, icon: Users },
                  { name: 'Youth Politics', count: 12, icon: Vote },
                  { name: 'East Africa Relations', count: 15, icon: Globe }
                ].map((category, index) => (
                  <button key={index} className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors group">
                    <div className="flex items-center gap-3">
                      <category.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                      <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {category.count}
                    </span>
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