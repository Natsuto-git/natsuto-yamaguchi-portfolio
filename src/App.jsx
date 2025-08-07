import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  User, 
  Heart, 
  Trophy, 
  Target, 
  Star,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Sparkles,
  Globe
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';

// 画像のインポート
import headerPhoto from './assets/header_photo.jpg';
import newProfilePhoto from './assets/new_profile.jpg';
import cityNightPhoto from './assets/city_night.jpg';
import marketPhoto from './assets/market_photo.jpg';
import singaporeNightPhoto from './assets/singapore_night.jpg';
import nameCalligraphy from './assets/name_calligraphy.png';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ナビゲーションヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <img 
              src={nameCalligraphy} 
              alt="山口夏翔" 
              className="h-8 w-auto object-contain"
            />
          </motion.div>
          
          <nav className="hidden md:flex space-x-1">
            {[
              { id: 'about', label: 'プロフィール', color: 'bg-green-500' },
              { id: 'experience', label: '経験', color: 'bg-blue-500' },
              { id: 'skills', label: 'スキル', color: 'bg-orange-500' },
              { id: 'vision', label: 'ビジョン', color: 'bg-purple-500' },
              { id: 'contact', label: 'コンタクト', color: 'bg-cyan-500' }
            ].map((item) => (
              <Button
                key={item.id}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`${item.color} hover:opacity-80 text-white font-medium px-4 py-2 rounded-md transition-all duration-200 hover:scale-105`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* モバイルメニュー */}
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-2">
            {[
              { id: 'about', label: 'プロフィール', color: 'bg-green-500' },
              { id: 'experience', label: '経験', color: 'bg-blue-500' },
              { id: 'skills', label: 'スキル', color: 'bg-orange-500' },
              { id: 'vision', label: 'ビジョン', color: 'bg-purple-500' },
              { id: 'contact', label: 'コンタクト', color: 'bg-cyan-500' }
            ].map((item) => (
              <Button
                key={item.id}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`${item.color} hover:opacity-80 text-white text-xs px-3 py-1`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${headerPhoto})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="name-flip-container mb-8">
              <div className="name-flip">
                <div className="name-side flex justify-center items-center">
                  <img 
                    src={nameCalligraphy} 
                    alt="山口夏翔" 
                    className="h-20 md:h-32 lg:h-40 w-auto object-contain filter drop-shadow-lg"
                  />
                </div>
                <h1 className="name-side name-back text-4xl md:text-6xl lg:text-7xl font-bold text-white whitespace-nowrap">
                  Natsuto Yamaguchi
                </h1>
              </div>
            </div>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              最強のポジティブ思考力で未来を切り開く19歳のフリーランス
              <br />
              人間力と情熱、行動力で学歴を圧倒する
            </motion.p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-md transition-all duration-200 hover:scale-105 shadow-lg"
              >
                プロフィールを見る
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* スクロールインジケーター */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-red-500" />
        </motion.div>
      </section>

      {/* プロフィールセクション */}
      <section id="about" className="section-padding bg-gray-50 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${cityNightPhoto})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black japanese-font">
              プロフィール
            </h2>
            <p className="text-gray-600 text-lg">About Me</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="profile-image-container">
                <img
                  src={newProfilePhoto}
                  alt="山口夏翔のプロフィール写真"
                  className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-white"
                />
                <div className="flex justify-center mt-4 space-x-2">
                  <Badge className="bg-red-100 text-red-600 border-red-200">
                    <MapPin className="w-3 h-3 mr-1" />
                    兵庫県
                  </Badge>
                  <Badge className="bg-red-100 text-red-600 border-red-200">
                    <Calendar className="w-3 h-3 mr-1" />
                    19歳
                  </Badge>
                  <Badge className="bg-red-100 text-red-600 border-red-200">
                    ENFJ
                  </Badge>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                      基本情報
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div><strong>氏名:</strong> 山口夏翔 (Yamaguchi Natsuto)</div>
                      <div><strong>職業:</strong> フリーランス</div>
                      <div><strong>居住地:</strong> 兵庫県</div>
                      <div><strong>MBTI:</strong> ENFJ（主人公）</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                      価値観・信念
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      「最初から正解の道を選ぶのではなく、自分がより面白いと感じた道を選び、その道を正解にする」という信念を持っています。YouTuberのヒカルさんから影響を受け、「なりたいものになれるのはなろうとしたものだけ」「心配すんな全部上手くいく」という言葉を大切にしています。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                      趣味・個性
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['野球', 'テニス', 'バレーボール', 'サッカー', 'バスケットボール'].map((sport) => (
                        <Badge key={sport} variant="outline" className="border-gray-300">{sport}</Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['温泉', '人との交流'].map((hobby) => (
                        <Badge key={hobby} variant="outline" className="border-gray-300">{hobby}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 経験セクション */}
      <section id="experience" className="section-padding relative bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${singaporeNightPhoto})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black japanese-font">
              経験・実績
            </h2>
            <p className="text-gray-600 text-lg">Experience & Achievements</p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-6 h-6 mr-3 text-red-500" />
                    <div>
                      <h3 className="text-xl font-bold text-black">生徒会長として校則改定</h3>
                      <p className="text-gray-600">高校3年生</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    各場の前髪員に関する校則を改定し、全校生徒の90%以上の賛成を得て3年以上改定されていなかった校則の変更に成功。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">リーダーシップ</Badge>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">交渉力</Badge>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">資料作成</Badge>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">チームマネジメント</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 mr-3 text-red-500" />
                    <div>
                      <h3 className="text-xl font-bold text-black">インターアクトクラブ部長</h3>
                      <p className="text-gray-600">17歳</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    「服のカプセルプロジェクト」を主導し、1ヶ月で段ボール10個分の古着を地域住民から集めることに成功。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">地域連携</Badge>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">企画力</Badge>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">広報活動</Badge>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-200">ボランティア精神</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="section-padding bg-gray-50 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${marketPhoto})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black japanese-font">
              スキル・学習
            </h2>
            <p className="text-gray-600 text-lg">Skills & Learning</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-pink-500 flex items-center">
                    コアスキル
                  </h3>
                  <div className="space-y-6">
                    {[
                      { name: '英語', level: 80 },
                      { name: '中国語', level: 10 },
                      { name: 'コミュニケーション', level: 95 },
                      { name: 'リーダーシップ', level: 90 },
                      { name: 'AI活用', level: 60 },
                      { name: 'プロジェクト管理', level: 75 }
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-red-400 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    語学力
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div><strong>英語:</strong> TOEFL iBT MyBest Score 80点</div>
                    <div><strong>中国語:</strong> 学習中</div>
                    <div><strong>日本語:</strong> ネイティブ</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    資格・学習
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>• ビジネス実務法務検定（勉強中）</div>
                    <div>• 各種AIツールの活用スキル</div>
                    <div>• 幅広い年齢層とのコミュニケーション能力</div>
                    <div>• ポスター等の広告作成能力</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    求める交流
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>• スポーツを一緒に楽しめる仲間</div>
                    <div>• 起業を志している人、経営者の方</div>
                    <div>• グローバルに活動している方</div>
                    <div>• 楽しく遊べる友達</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ビジョンセクション */}
      <section id="vision" className="section-padding relative bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${cityNightPhoto})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black japanese-font">
              ビジョン・目標
            </h2>
            <p className="text-gray-600 text-lg">Vision & Goals</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-0 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    個人目標
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• 人間力で学歴を圧倒する実力を身につける</li>
                    <li>• グローバルに活躍できる語学力とスキルを習得</li>
                    <li>• AIツールを駆使した効率的な働き方の確立</li>
                    <li>• 多様な人々との繋がりを通じた成長</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-lg border-0 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center">
                    <Star className="w-6 h-6 mr-3" />
                    社会貢献・ビジョン
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    意識を高く持つ若者たちが輝き、新しい社会を積極的に作っていく社会の実現を目指しています。
                    ポジティブな思考力と行動力で、周りの人々にも良い影響を与え、共に成長できる環境を作りたいと考えています。
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="section-padding bg-gray-50 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${singaporeNightPhoto})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black japanese-font">
              コンタクト
            </h2>
            <p className="text-gray-600 text-lg">Contact</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-lg text-gray-700 mb-8">
                新しい出会いや挑戦を求めています。お気軽にご連絡ください！
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold h-16 text-lg shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => window.open('https://instagram.com/natsuto_yamaguchi', '_blank')}
              >
                <Instagram className="w-6 h-6 mr-3" />
                Instagram
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold h-16 text-lg shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => window.open('https://linkedin.com/in/natsuto-yamaguchi', '_blank')}
              >
                <Linkedin className="w-6 h-6 mr-3" />
                LinkedIn
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 text-lg">
                「心配すんな全部上手くいく」- 一緒に素晴らしい未来を作りましょう！
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 山口夏翔 (Natsuto Yamaguchi). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

