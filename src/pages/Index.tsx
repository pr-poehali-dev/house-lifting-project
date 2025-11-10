import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Home",
      title: "Подъем домов",
      description: "Профессиональный подъем деревянных и каркасных домов с использованием гидравлического оборудования"
    },
    {
      icon: "Hammer",
      title: "Замена венцов",
      description: "Полная или частичная замена нижних венцов сруба с сохранением целостности конструкции"
    },
    {
      icon: "Building2",
      title: "Ремонт фундамента",
      description: "Укрепление, восстановление и замена фундамента любого типа: ленточный, столбчатый, свайный"
    },
    {
      icon: "Shield",
      title: "Усиление конструкций",
      description: "Установка дополнительных опор и балок для повышения несущей способности здания"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/08970aef-48ac-4d06-8fe7-084b1e2131bf/files/ac3fe454-2bef-4b9b-86ba-161a36d8c679.jpg",
      title: "Подъем дома в Подмосковье",
      description: "Подъем деревянного дома 8×10м на высоту 1.2м"
    },
    {
      image: "https://cdn.poehali.dev/projects/08970aef-48ac-4d06-8fe7-084b1e2131bf/files/09dabce3-c5ea-48eb-9c21-e112c1108b2d.jpg",
      title: "Замена нижних венцов",
      description: "Полная замена 4 венцов сруба 150×150мм"
    },
    {
      image: "https://cdn.poehali.dev/projects/08970aef-48ac-4d06-8fe7-084b1e2131bf/files/8a5fda67-2d5d-4552-aa1d-94f1f1d36354.jpg",
      title: "Ремонт ленточного фундамента",
      description: "Восстановление фундамента дома 1985 года постройки"
    }
  ];

  const technologies = [
    {
      icon: "Settings",
      title: "Гидравлические домкраты",
      description: "Используем профессиональное оборудование грузоподъемностью до 50 тонн"
    },
    {
      icon: "Ruler",
      title: "Точные измерения",
      description: "Лазерные нивелиры для контроля уровня на каждом этапе работ"
    },
    {
      icon: "HardHat",
      title: "Безопасность",
      description: "Строгое соблюдение технологии и норм безопасности строительных работ"
    }
  ];

  const testimonials = [
    {
      name: "Михаил Петрович",
      text: "Отличная работа! Подняли дом за 3 дня, все аккуратно и профессионально. Теперь можем сделать нормальный подвал.",
      rating: 5
    },
    {
      name: "Анна Сергеевна",
      text: "Заменили нижние венцы на даче. Дом простоял 60 лет, думали придется сносить. Ребята сделали невозможное!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      text: "Быстро и качественно отремонтировали фундамент. Цена адекватная, работают честно. Рекомендую!",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={32} className="text-accent" />
              <span className="text-2xl font-bold text-primary">ПрофОтдел</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
              <a href="#technologies" className="hover:text-accent transition-colors">Технологии</a>
              <a href="#about" className="hover:text-accent transition-colors">О нас</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Отзывы</a>
              <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
                <a href="#contact">Связаться</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
            Подъем домов и ремонт фундамента
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональные услуги по подъему домов, замене венцов и восстановлению фундамента. 
            Более 15 лет опыта и 500+ успешных проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8" asChild>
              <a href="#contact">Получить консультацию</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#portfolio">Смотреть работы</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр работ по подъему и ремонту домов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in border-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Портфолио работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры успешно выполненных проектов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Технологии и методы работы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Современное оборудование и проверенные технологии
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={tech.icon} size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{tech.title}</h3>
                <p className="text-muted-foreground text-base">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            О компании
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            ПрофОтдел — это команда профессионалов с более чем 15-летним опытом в сфере подъема домов, 
            замены венцов и ремонта фундаментов. Мы выполнили более 500 проектов по всей Московской области.
          </p>
          <p className="text-lg md:text-xl opacity-90">
            Наша цель — продлить жизнь вашего дома, используя современные технологии и профессиональное оборудование. 
            Мы гарантируем качество работ и соблюдение всех сроков.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-lg opacity-90">лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg opacity-90">проектов</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg opacity-90">гарантия</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами для бесплатной консультации
          </p>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-primary">Описание задачи</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <span className="text-lg font-semibold">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <span className="text-lg font-semibold">info@stroymaster.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  <span className="text-lg font-semibold">Москва и Московская область</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Home" size={32} className="text-accent" />
            <span className="text-2xl font-bold">ПрофОтдел</span>
          </div>
          <p className="text-lg opacity-90 mb-6">
            Профессиональный подъем домов и ремонт фундамента
          </p>
          <p className="opacity-75">
            © 2024 ПрофОтдел. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;