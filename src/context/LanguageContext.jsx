import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    title: "MIDAS TOUCH Learning Center",
    heroSub:
      "Start your Spanish Journey  Now. Expand your career opportunities by learning Spanish in Burmese. ",
    cta: "Book a Free Spanish Trial",
    about: "About",
    programs: "Programs",
    teachers: "Teachers",
    trial: "Free Trial",
    whyTitle: "Why Choose MIDAS TOUCH",
    whySub:
      "Fast and easy learning methods. Well-structured and modern teaching approach. Effective, career-focused curriculum - trusted by students worldwide. ",
    liveCardTitle: "Live",
    liveCardSub: "Live Zoom Classes",
    liveCardDescription:
      "High-quality interactive Zoom lessons delivered by experienced professional teachers for measurable learning success.",
    personalizedCardTitle: "Personalized",
    personalizedCardSub: "Recorded Video Lessons",
    personalizedCardDescription:
      "Learn anytime, anywhere with recorded lessons led by professional  teachers with effective guidance.",
    individualCardTitle: "Individual",
    individualCardSub: "One-on-One Private Sessions",
    individualCardDescription:
      "Flexible scheduling with personalized One-on-One live classes designed around your availability.",
    formName: "Full Name",
    formEmail: "Email Address",
    formPhoneNumber: "Phone Number",
    formGoal: "Your Goal (Travel, Work, Study, etc.)",
    formSubmit: "Request Free Trial",
  },
  mm: {
    title: "MIDAS TOUCH သင်ကြားရေးစင်တာ",
    heroSub:
      "  သင့်ရဲ့ အလုပ်အကိုင်အခွင့်အလမ်း ကျယ်ပြန့်ဖို စပိန်ဘာသာစကားကို အခုပဲ လေ့လာဖိုစတင်လိုက်ပါ",
    cta: "အခမဲ့ စပိန်ဘာသာ စမ်းသပ်သင်တန်း လက်ခံရန်",
    about: "အကြောင်းအရာ",
    programs: "သင်တန်းများ",
    teachers: "ဆရာများ",
    trial: "စမ်းသပ်သင်တန်း",
    whyTitle: "ဘာကြောင့် MIDAS TOUCH ကိုရွေးချယ်သင့်သလဲ",
    whySub:
      "ထိရောက်စေမည့် သင်ရိုးဖြင့် အချိန်တိုအတွင်း လုပ်ငန်းခွင်တွင်ထိရောက်လွယ်ကူစွာ အသုံးချနိုင်မည့် သင်ကြားရေးဖြစ်ပါသည်။",
    liveCardTitle: "Live",
    liveCardSub: "Zoom Classes",
    liveCardDescription:
      "အတွေ့အကြုံရှိ ဆရာများမှ တိုက်ရိုက်သင်ကြားပေးသော ထိရောက်ပြီး မြန်ဆန်သော Zoom Live အတန်းများ",
    personalizedCardTitle: "Personalized",
    personalizedCardSub: "Video Recorded Classes",
    personalizedCardDescription:
      "အချိန်နေရာမရွေး တက်ရောက်နိုင်သော အတွေ့အကြုံရှိ ဆရာများမှ သီးသန့်ရိုက်ကူးသင်ကြားထားသော Video အတန်းများ",
    individualCardTitle: "Individual",
    individualCardSub: "One-on-One Private Sessions",
    individualCardDescription:
      "မိမိသင်ယူလိုသောအချိန်အတိုင်း အတွေ့အကြုံရှိ ဆရာများနှင့် ညှိနှိုင်း၍ တက်ရောက်နိုင်သော One-on-One အတန်းများ",
    formName: "နာမည်အပြည့်အစုံ",
    formEmail: "အီးမေးလ်လိပ်စာ",
    formPhoneNumber: "ဖုန်းနံပါတ်",
    formGoal: "ရည်ရွယ်ချက် (ခရီးသွား၊ အလုပ်၊ ပညာရေး စသည်)",
    formSubmit: "အခမဲ့ စမ်းသပ်သင်တန်း တောင်းဆိုရန်",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
