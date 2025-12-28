import { Target, Eye, ShieldCheck, Users, Heart, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('#mission-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const coreValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassion",
      description: "Heart-centered care for all",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Collective growth and support",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integrity",
      description: "Ethical and transparent actions",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Highest quality standards",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sustainability",
      description: "Lasting positive impact",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Innovation",
      description: "Creative solutions",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ]

  return (
    <section id="mission-section" className="relative py-20 px-4 sm:px-6 lg:px-8 font-text overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#233875]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FFDE59]/20 rounded-full blur-3xl"></div>
        </div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-block mb-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#233875] via-[#FFDE59] to-[#233875] rounded-full blur opacity-30 animate-pulse"></div>
              <span className="relative inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full border border-gray-200 shadow-lg">
                <div className="flex gap-1">
                  {["Health", "Education", "Leadership", "Partnership"].map((word, idx) => (
                    <span key={idx} className="inline-flex items-center">
                      <span className={`font-bold ${
                        idx % 2 === 0 ? 'text-[#233875]' : 'text-[#FFDE59]'
                      }`}>
                        {word}
                      </span>
                      {idx < 3 && <span className="mx-2 text-gray-400">•</span>}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#233875] via-[#233875] to-[#1a2b5e]">
                HELP
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#233875] to-transparent opacity-50"></span>
            </span>
            <span className="mx-2 sm:mx-4 text-gray-300">|</span>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFDE59] via-[#ffd32a] to-[#ffc107]">
                Ethiopia
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFDE59] to-transparent opacity-50"></span>
            </span>
          </h1>

          <div className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              <span className="font-bold text-[#FFDE59]">Empowering communities</span> with{' '}
              <span className="font-semibold text-[#233875]">hope</span>,{' '}
              <span className="font-semibold text-[#FFDE59]">care</span>, and{' '}
              <span className="font-bold text-[#233875]">action</span>, building a brighter{' '}
              <span className="font-bold text-[#FFDE59]">Ethiopia</span>.
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FFDE59] to-transparent mx-auto mt-6 rounded-full"></div>
          </div>
        </div>

        <div className={`relative max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative backdrop-blur-sm bg-white/80 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#233875]/10 to-transparent transform rotate-45 translate-x-6 -translate-y-6"></div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
              HELP Ethiopia is a multi-disciplinary organization registered in Ethiopia with a dedicated charity program (Ye'Eteye Charity) targeting economically disadvantaged groups. We advocate for quality education, leadership, and collaboration as tools for sustainable healthcare and societal development.
            </p>
            
            <div className="flex items-center justify-center mt-6 gap-2">
              <div className="w-4 h-4 rounded-full bg-[#FFDE59] animate-pulse"></div>
              <span className="text-sm text-gray-500 font-medium">Making a difference since 2015</span>
            </div>
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#233875] to-[#FFDE59] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full">
              <div className="flex items-start mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-[#233875]/10 rounded-xl transform rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-[#233875] to-[#1a2b5e] p-4 rounded-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
                    <span className="text-xs font-semibold text-[#233875] bg-[#233875]/10 px-3 py-1 rounded-full">
                      Purpose
                    </span>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#233875] to-[#FFDE59] rounded-full mt-3"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#233875]/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#233875]"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To catalyze sustainable development in Ethiopia by empowering healthcare professionals, driving innovation, and fostering a comprehensive and inclusive healthcare ecosystem.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFDE59]/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FFDE59]"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Fueled by the belief that every individual deserves access to quality healthcare and education, regardless of their circumstances.
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-6xl font-bold text-[#233875]">M</div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFDE59] to-[#233875] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full">
              <div className="flex items-start mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-[#FFDE59]/10 rounded-xl transform -rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-[#FFDE59] to-[#ffd32a] p-4 rounded-xl">
                    <Eye className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
                    <span className="text-xs font-semibold text-[#FFDE59] bg-[#FFDE59]/10 px-3 py-1 rounded-full">
                      Future
                    </span>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#FFDE59] to-[#233875] rounded-full mt-3"></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFDE59] to-transparent"></div>
                <p className="text-gray-600 leading-relaxed pl-4 text-lg">
                  A Healthy and Resilient Ethiopia with advanced healthcare infrastructure, a well-trained workforce, streamlined processes, and inclusive healthcare services for all.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-[#FFDE59]/5 to-transparent rounded-xl border border-[#FFDE59]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FFDE59] animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Building a legacy of health and prosperity for generations
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-6xl font-bold text-[#FFDE59]">V</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Guiding principles that shape every action and decision we make
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className={`inline-flex p-3 rounded-lg ${value.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={value.color}>
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-gray-300 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#233875]/20 via-[#FFDE59]/20 to-[#233875]/20 rounded-full blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Mission</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Together, we can build a healthier, more educated, and prosperous Ethiopia
              </p>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#233875] to-[#1a2b5e] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Involved
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}