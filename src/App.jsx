import React, { useState, useEffect } from "react";
import { ChevronDown, Instagram, MapPin, Phone, Mail } from "lucide-react";

// Sample Data (replace with your actual data)
const speakers = {
  keynote: {
    name: "Prof. Dr. Jane Doe",
    university: "Harvard University",
    image: "https://placehold.co/300x300/EBF4F6/053946?text=Keynote",
  },
  plenary: [
    {
      name: "Dr. John Smith",
      university: "Cambridge University",
      image: "https://placehold.co/200x200/EBF4F6/053946?text=Speaker",
    },
    {
      name: "Dr. Emily White",
      university: "Stanford University",
      image: "https://placehold.co/200x200/EBF4F6/053946?text=Speaker",
    },
    {
      name: "Dr. Michael Brown",
      university: "University of Tokyo",
      image: "https://placehold.co/200x200/EBF4F6/053946?text=Speaker",
    },
    {
      name: "Dr. Sarah Green",
      university: "National University of Singapore",
      image: "https://placehold.co/200x200/EBF4F6/053946?text=Speaker",
    },
    {
      name: "Dr. David Black",
      university: "Australian National University",
      image: "https://placehold.co/200x200/EBF4F6/053946?text=Speaker",
    },
  ],
};

const topics = [
  "Applied Linguistics and Language Education",
  "Theoretical Linguistics and Phonology",
  "Corpus Linguistics and Computational Linguistics",
  "Sociolinguistics and Discourse Analysis",
  "Psycholinguistics and Neurolinguistics",
  "Comparative Literature and World Literature",
  "Postcolonial Literature and Criticism",
  "Digital Humanities and Literary Studies",
  "Curriculum Development and Pedagogy",
  "Educational Technology and E-learning",
  "Assessment and Evaluation in Education",
  "Multiculturalism and Inclusive Education",
];

const partners = [
  "https://placehold.co/150x80/FFFFFF/053946?text=Partner+1",
  "https://placehold.co/150x80/FFFFFF/053946?text=Partner+2",
  "https://placehold.co/150x80/FFFFFF/053946?text=Partner+3",
  "https://placehold.co/150x80/FFFFFF/053946?text=Partner+4",
  "https://placehold.co/150x80/FFFFFF/053946?text=Partner+5",
  "https://placehold.co/150x80/FFFFFF/053946?text=Partner+6",
];

// Helper Components
const NavLink = ({ href, children, setMenuOpen, onNavClick }) => (
  <a
    href={href}
    onClick={(e) => {
      if (setMenuOpen) setMenuOpen(false);
      onNavClick(e);
    }}
    className="block md:inline-block text-white hover:text-lime-300 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#053946] mb-12">
    {children}
  </h2>
);

// Main Components
const Header = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Call For Papers",
    "Speakers",
    "Payment",
    "Register",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#053946] shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={onNavClick}
              className="text-white text-xl font-bold"
            >
              ICLLLE 2025
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onNavClick={onNavClick}
                >
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-[#053946] bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                setMenuOpen={setMenuOpen}
                onNavClick={onNavClick}
              >
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = ({ onNavClick }) => (
  <Section
    id="home"
    className="bg-gradient-to-br from-lime-100 to-blue-200 min-h-screen flex items-center justify-center text-center !pt-20"
  >
    <div className="relative z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#053946] leading-tight mb-4 animate-fade-in-down">
        International Conference on
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053946] to-blue-600">
          Language, Linguistic, Literature, and Education
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
        Join leading academics, researchers, and scholars to share knowledge and
        new ideas.
      </p>
      <a
        href="#register"
        onClick={onNavClick}
        className="inline-block bg-[#053946] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up animation-delay-600"
      >
        Register Now
      </a>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#call-for-papers" onClick={onNavClick}>
        <ChevronDown className="w-8 h-8 text-[#053946]" />
      </a>
    </div>
  </Section>
);

const CallForPapersSection = () => (
  <Section id="call-for-papers" className="bg-white">
    <SectionTitle>Call For Papers</SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="bg-lime-50/50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#053946]"
        >
          <h3 className="font-semibold text-lg text-[#053946] mb-2">{topic}</h3>
          <p className="text-gray-600 text-sm">
            We invite submissions of original research papers on this topic.
            Share your insights and contribute to the academic discourse.
          </p>
        </div>
      ))}
    </div>
  </Section>
);

const SpeakersSection = () => (
  <Section
    id="speakers"
    className="bg-gradient-to-br from-lime-100 to-blue-200"
  >
    <SectionTitle>Our Esteemed Speakers</SectionTitle>
    {/* Keynote Speaker */}
    <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-white p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <img
        src={speakers.keynote.image}
        alt={speakers.keynote.name}
        className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-[#053946]"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x300/EBF4F6/053946?text=Keynote";
        }}
      />
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-[#053946]">
          {speakers.keynote.name}
        </h3>
        <p className="text-lg text-gray-600 mb-2">
          {speakers.keynote.university}
        </p>
        <span className="inline-block bg-[#053946] text-white text-sm font-semibold px-4 py-1 rounded-full">
          Keynote Speaker
        </span>
      </div>
    </div>

    {/* Plenary Speakers */}
    <h3 className="text-2xl font-bold text-center text-[#053946] mb-10">
      Plenary Speakers
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
      {speakers.plenary.map((speaker, index) => (
        <div key={index} className="text-center group">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 border-4 border-lime-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/200x200/EBF4F6/053946?text=Speaker";
            }}
          />
          <h4 className="mt-4 font-bold text-md text-[#053946]">
            {speaker.name}
          </h4>
          <p className="text-sm text-gray-600">{speaker.university}</p>
        </div>
      ))}
    </div>
  </Section>
);

const PaymentSection = () => (
  <Section id="payment" className="bg-white">
    <SectionTitle>Registration & Payment</SectionTitle>
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Registration Fee */}
      <div className="bg-lime-50/50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-[#053946] mb-6">
          Registration Fee
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-between border-b pb-2">
            <span>Local Presenter</span>{" "}
            <span className="font-semibold text-[#053946]">IDR 1,500,000</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>International Presenter</span>{" "}
            <span className="font-semibold text-[#053946]">$150 USD</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Local Participant</span>{" "}
            <span className="font-semibold text-[#053946]">IDR 500,000</span>
          </li>
          <li className="flex justify-between">
            <span>International Participant</span>{" "}
            <span className="font-semibold text-[#053946]">$50 USD</span>
          </li>
        </ul>
      </div>
      {/* Payment Details */}
      <div className="bg-blue-50/50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-[#053946] mb-6">
          Payment Details
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              Payment Method
            </h4>
            <p className="text-gray-600">Bank Transfer to:</p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-1">
              Bank Name: XYZ Bank
              <br />
              Account No: 123-456-7890
              <br />
              Account Holder: ICLLLE Committee
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              Payment Deadline
            </h4>
            <p className="text-red-600 font-bold">30 August 2025</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              Upload Payment Receipt
            </h4>
            <p className="text-gray-600 mb-3">
              After payment, please upload your receipt to confirm your
              registration.
            </p>
            <button className="w-full bg-[#053946] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Upload Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const RegisterSection = () => (
  <Section
    id="register"
    className="bg-gradient-to-br from-lime-100 to-blue-200"
  >
    <SectionTitle>Join Us</SectionTitle>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {/* Presenter Card */}
      <div className="bg-white p-10 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 w-full md:w-96">
        <h3 className="text-3xl font-bold text-[#053946]">As a Presenter</h3>
        <p className="text-gray-600 my-4">
          Share your research with a global audience. Submit your paper and
          become a part of the academic dialogue.
        </p>
        <button className="bg-[#053946] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-colors duration-300 shadow-md">
          Register as Presenter
        </button>
      </div>
      {/* Participant Card */}
      <div className="bg-white p-10 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 w-full md:w-96">
        <h3 className="text-3xl font-bold text-[#053946]">As a Participant</h3>
        <p className="text-gray-600 my-4">
          Gain new insights, network with peers, and learn from the leading
          experts in the field.
        </p>
        <button className="bg-lime-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-lime-600 transition-colors duration-300 shadow-md">
          Register as Participant
        </button>
      </div>
    </div>
  </Section>
);

const ContactSection = () => (
  <Section id="contact" className="bg-white">
    <SectionTitle>Contact Us</SectionTitle>
    <div className="grid md:grid-cols-2 gap-10">
      {/* Contact Info */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-8 h-8 text-[#053946] mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-gray-800">Address</h4>
            <p className="text-gray-600">
              Jl. ZA. Pagar Alam No.9 -11, Labuhan Ratu, Kec. Kedaton, Kota
              Bandar Lampung, Lampung 35132
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="w-8 h-8 text-[#053946] mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-gray-800">Phone</h4>
            <p className="text-gray-600">
              M. Fitratullah:{" "}
              <a href="tel:+6282175797791" className="hover:text-[#053946]">
                +62-821-7579-7791
              </a>
            </p>
            <p className="text-gray-600">
              Dina Amelia:{" "}
              <a href="tel:+6285381931945" className="hover:text-[#053946]">
                +62-853-8193-1945
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Mail className="w-8 h-8 text-[#053946] mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-gray-800">Email</h4>
            <a
              href="mailto:icllle@teknokrat.ac.id"
              className="text-gray-600 hover:text-[#053946]"
            >
              icllle@teknokrat.ac.id
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Instagram className="w-8 h-8 text-[#053946] mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-gray-800">Instagram</h4>
            <a
              href="https://www.instagram.com/icllle_teknokrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#053946]"
            >
              @icllle_teknokrat
            </a>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="rounded-lg overflow-hidden shadow-lg h-80 md:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.138282998393!2d105.2582533153574!3d-5.396539996081896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db637a077881%3A0x53c44473c41615f!2sUniversitas%20Teknokrat%20Indonesia!5e0!3m2!1sen!2sid!4v1689842429606!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Universitas Teknokrat Indonesia Location"
        ></iframe>
      </div>
    </div>
  </Section>
);

const PartnerSection = () => (
  <Section id="our-partner" className="bg-lime-50/50">
    <SectionTitle>Our Partners</SectionTitle>
    <div className="relative h-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-max h-full flex items-center animate-marquee">
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="w-48 flex-shrink-0 mx-8">
            <img
              src={partner}
              alt={`Partner ${index + 1}`}
              className="max-w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/150x80/FFFFFF/053946?text=Partner";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-[#053946] text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; {new Date().getFullYear()} ICLLLE. All Rights Reserved.</p>
      <p className="text-sm text-gray-400">
        Hosted by Universitas Teknokrat Indonesia
      </p>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  // Centralized handler for smooth scrolling
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    // Ensure it's an internal link
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="bg-lime-50 font-sans leading-normal tracking-normal">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
      `}</style>
      <Header onNavClick={handleNavClick} />
      <main>
        <HeroSection onNavClick={handleNavClick} />
        <CallForPapersSection />
        <SpeakersSection />
        <PaymentSection />
        <RegisterSection />
        <ContactSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}
