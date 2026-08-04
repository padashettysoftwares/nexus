import { TrendingUp, Building2, FileText, CheckCircle2 } from "lucide-react";

export function SmeSectorInfoSection() {
  return (
    <div className="bg-[#FDFBF7] py-24 relative overflow-hidden border-t border-[#EAE7E0]">
      {/* Subtle red glow for light theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/80 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-6">
            The Backbone of India's <span className="text-red-600">Economy</span>
          </h2>
          <p className="text-stone-600 text-lg md:text-xl leading-relaxed">
            With millions of registered businesses driving growth, proper compliance is the key to unlocking government schemes, subsidies, and seamless scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-2 bg-white border border-[#EAE7E0] rounded-3xl p-8 md:p-10 shadow-[0_2px_10px_rgb(0,0,0,0.02)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
              <TrendingUp className="w-48 h-48 text-stone-900" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 border border-red-100/50">
                <Building2 className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">63+ Million</h3>
              <p className="text-xl font-bold text-stone-700 mb-3">MSMEs in India</p>
              <p className="text-stone-500 leading-relaxed max-w-md text-base md:text-lg">
                Contributing significantly to the country's manufacturing output, exports, and GDP. Registration is your first step to being recognized.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#EAE7E0] rounded-3xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FCFBF8] flex items-center justify-center mb-6 border border-[#EAE7E0]">
                <CheckCircle2 className="w-7 h-7 text-stone-400" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">100% Legal Protection</h3>
              <p className="text-stone-500 leading-relaxed text-base">
                Operate without hurdles. Protect your brand, assets, and directors from unnecessary liabilities.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#EAE7E0] rounded-3xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
             <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 border border-red-100/50">
                <FileText className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Govt. Subsidies</h3>
              <p className="text-stone-500 leading-relaxed text-base">
                Registered businesses gain exclusive access to collateral-free loans, grants, and tender preferences.
              </p>
          </div>

          {/* Card 4 - CTA */}
          <div className="md:col-span-2 bg-gradient-to-r from-red-50 to-white border border-red-100/60 rounded-3xl p-8 md:p-10 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-8 hover:border-red-200 transition-colors">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">Ready to formalize your business?</h3>
              <p className="text-stone-600 text-lg">Join the thousands of businesses we've successfully registered.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
