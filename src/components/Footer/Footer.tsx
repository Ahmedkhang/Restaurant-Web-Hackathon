import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFullLinkFooter";


export default function Footer() {
  return (
    <footer className="w-full lg:w-[1920px] bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 py-16">
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-8"></div>
        <div className="lg:flex justify-between items-center mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>

    </footer>
  )
}