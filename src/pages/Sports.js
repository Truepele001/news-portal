import React from 'react';
import { Clock, TrendingUp, ArrowRight, Trophy, Target, Zap } from 'lucide-react';

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
      date: "June 20, 2025"
    },
    {
      title: "Harambee Stars Qualify for AFCON 2026 After Victory Over Tanzania",
      summary: "Kenya's national football team secures their spot in the Africa Cup of Nations with a commanding 2-0 victory in the final qualifying match.",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Football",
      readTime: "5 min read",
      date: "June 19, 2025"
    },
    {
      title: "Faith Kipyegon Breaks 1500m World Record at Diamond League Meeting",
      summary: "The Olympic champion sets a new world record in the women's 1500 meters, cementing her status as one of Kenya's greatest athletes.",
      image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Athletics",
      readTime: "4 min read",
      date: "June 18, 2025"
    }
  ];

  const liveScores = [
    {
      homeTeam: "Gor Mahia",
      awayTeam: "AFC Leopards",
      homeScore: 2,
      awayScore: 1,
      status: "Final",
      sport: "KPL"
    },
    {
      homeTeam: "Kenya",
      awayTeam: "Uganda",
      homeScore: 1,
      awayScore: 0,
      status: "2nd Half",
      sport: "CECAFA"
    },
    {
      homeTeam: "Tusker FC",
      awayTeam: "Bandari",
      homeScore: 0,
      awayScore: 0,
      status: "1st Half",
      sport: "KPL"
    }
  ];

  const upcomingGames = [
    {
      teams: "Harambee Stars vs Ethiopia",
      time: "4:00 PM EAT",
      date: "Sunday",
      sport: "AFCON Qualifier"
    },
    {
      teams: "Gor Mahia vs Simba SC",
      time: "3:00 PM EAT",
      date: "Saturday",
      sport: "CAF Champions League"
    },
    {
      teams: "Kenya vs Tanzania",
      time: "2:00 PM EAT",
      date: "Next Week",
      sport: "East Africa Cup"
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
                  className="text-green-300 font-medium border-b-2 border-green-300 pb-1"
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
            <Trophy className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kenya Sports
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Get the latest scores, highlights, and breaking news from Kenyan and international sports
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Sports Content */}
          <div className="lg:col-span-2 space-y-8">
            {sportsNews.map((article, index) => (
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
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md font-medium">
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
                    
                    <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sports Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Scores */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-red-500" />
                Live Scores
              </h3>
              <div className="space-y-4">
                {liveScores.map((game, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase">
                        {game.sport}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        game.status === 'Final' ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {game.status}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{game.awayTeam}</span>
                        <span className="font-bold text-lg">{game.awayScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{game.homeTeam}</span>
                        <span className="font-bold text-lg">{game.homeScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Games */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gray-600" />
                Upcoming Games
              </h3>
              <div className="space-y-4">
                {upcomingGames.map((game, index) => (
                  <div key={index} className="group cursor-pointer hover:bg-white rounded-lg p-3 -m-3 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium mb-2 inline-block">
                          {game.sport}
                        </span>
                        <h4 className="text-gray-900 font-medium leading-snug group-hover:text-green-600 transition-colors">
                          {game.teams}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">{game.date} • {game.time}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports Categories */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-gray-600" />
                Sports
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Athletics', count: 45 },
                  { name: 'Football', count: 32 },
                  { name: 'Rugby', count: 18 },
                  { name: 'Basketball', count: 12 },
                  { name: 'Volleyball', count: 15 },
                  { name: 'Cricket', count: 8 }
                ].map((sport, index) => (
                  <button key={index} className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors group">
                    <span className="text-gray-700 group-hover:text-green-600 font-medium">
                      {sport.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {sport.count}
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