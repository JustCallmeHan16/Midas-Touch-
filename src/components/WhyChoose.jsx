import Card from "./Card";
import { useLang } from "../context/LanguageContext";

const WhyChoose = () => {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t.whyTitle}
      </h2>
      <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
        {t.whySub}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <Card badge={t.liveCardTitle} title={t.liveCardSub}>
          {t.liveCardDescription}
        </Card>
        <Card badge={t.personalizedCardTitle} title={t.personalizedCardSub}>
          {t.personalizedCardDescription}
        </Card>
        <Card badge={t.individualCardTitle} title={t.individualCardSub}>
          {t.individualCardDescription}
        </Card>
      </div>
    </section>
  );
};

export default WhyChoose;
