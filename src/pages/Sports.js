import React from 'react';
import { Clock, TrendingUp, ArrowRight, Trophy, Target, Zap, Eye, MessageCircle, Share2, Medal } from 'lucide-react';

interface SportsProps {
  onNavigate: (page: string) => void;
}

export default function Sports({ onNavigate }: SportsProps) {
  const sportsNews = [
    {
      title: "Kenyan Athletes Dominate World Athletics Championships in Budapest",
      summary: "Kenya's middle and long-distance runners continue their stellar performance, securing multiple gold medals and setting new championship records.",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Athletics",
      readTime: "3 min read",
      date: "June 20, 2025",
      views: "18.7K",
      comments: 124
    },
    {
      title: "Harambee Stars Qualify for AFCON 2026 After Victory Over Tanzania",
      summary: "Kenya's national football team secures their spot in the Africa Cup of Nations with a commanding 2-0 victory in the final qualifying match.",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Football",
      readTime: "5 min read",
      date: "June 19, 2025",
      views: "22.3K",
      comments: 156
    },
    {
      title: "Faith Kipyegon Breaks 1500m World Record at Diamond League Meeting",
      summary: "The Olympic champion sets a new world record in the women's 1500 meters, cementing her status as one of Kenya's greatest athletes.",
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Athletics",
      readTime: "4 min read",
      date: "June 18, 2025",
      views: "31.2K",
      comments: 203
    }
  ];

  const liveScores = [
    {
      homeTeam: "Gor Mahia",
      awayTeam: "AFC Leopards",
      homeScore: 2,
      awayScore: 1,
      status: "Final",
      sport: "KPL",
      isLive: false
    },
    {
      homeTeam: "Kenya",
      awayTeam: "Uganda",
      homeScore: 1,
      awayScore: 0,
      status: "2nd Half",
      sport: "CECAFA",
      isLive: true
    },
    {
      homeTeam: "Tusker FC",
      awayTeam: "Bandari",
      homeScore: 0,
      awayScore: 0,
      status: "1st Half",
      sport: "KPL",
      isLive: true
    }
  ];

  const upcomingGames = [
    {
      teams: "Harambee Stars vs Ethiopia",
      time: "4:00 PM EAT",
      date: "Sunday",
      sport: "AFCON Qualifier",
      importance: "high"
    },
    {
      teams: "Gor Mahia vs Simba SC",
      time: "3:00 PM EAT",
      date: "Saturday",
      sport: "CAF Champions League",
      importance: "high"
    },
    {
      teams: "Kenya vs Tanzania",
      time: "2:00 PM EAT",
      date: "Next Week",
      sport: "East Africa Cup",
      importance: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl">
              <Trophy className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Kenya Sports
              </h1>
              <p className="text-xl text-gray-600">
                Latest scores, highlights, and breaking news from Kenyan sports
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Sports Content */}
          <div className="lg:col-span-2 space-y-8">
            {sportsNews.map((article, index) => (
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
                      {article.category === 'Athletics' && (
                        <div className="absolute top-4 left-4">
                          <Medal className="w-6 h-6 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full font-semibold">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
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
                        <button className="hover:text-green-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sports Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Live Scores */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-red-100 to-red-200 rounded-lg">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                Live Scores
              </h3>
              <div className="space-y-6">
                {liveScores.map((game, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {game.sport}
                      </span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        game.isLive 
                          ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-700' 
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700'
                      }`}>
                        {game.isLive && <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>}
                        }
                        {game.status}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{game.awayTeam}</span>
                        <span className="font-bold text-2xl text-gray-900">{game.awayScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{game.homeTeam}</span>
                        <span className="font-bold text-2xl text-gray-900">{game.homeScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Games */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                Upcoming Games
              </h3>
              <div className="space-y-6">
                {upcomingGames.map((game, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50 rounded-xl p-4 -m-4 transition-all duration-300 border border-transparent hover:border-green-100">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-xs font-semibold">
                            {game.sport}
                          </span>
                          {game.importance === 'high' && (
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <h4 className="text-gray-900 font-semibold leading-snug group-hover:text-green-600 transition-colors mb-2">
                          {game.teams}
                        </h4>
                        <p className="text-gray-500 text-sm">{game.date} • {game.time}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports Categories */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                Sports
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Athletics', count: 45, color: 'yellow' },
                  { name: 'Football', count: 32, color: 'green' },
                  { name: 'Rugby', count: 18, color: 'blue' },
                  { name: 'Basketball', count: 12, color: 'orange' },
                  { name: 'Volleyball', count: 15, color: 'purple' },
                  { name: 'Cricket', count: 8, color: 'red' }
                ].map((sport, index) => (
                  <button key={index} className="w-full flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50 rounded-xl transition-all duration-300 group border border-transparent hover:border-green-100">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 bg-gradient-to-r from-${sport.color}-400 to-${sport.color}-600 rounded-full`}></div>
                      <span className="text-gray-700 group-hover:text-green-600 font-semibold transition-colors">
                        {sport.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm font-medium">
                        {sport.count}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
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