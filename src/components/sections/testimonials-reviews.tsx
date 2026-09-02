"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

export function TestimonialsSection() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const result = await response.json();
        if (result.error) {
           throw new Error(result.error);
        }
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section className="py-24 bg-surface-alt border-y border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Google Reviews Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 bg-white p-8 rounded-[24px] border border-border shadow-card text-center"
          >
            <div className="w-16 h-16 bg-white border border-border rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm overflow-hidden">
              <span className="font-bold text-2xl text-[#4285F4]">G</span>
            </div>
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-10 bg-gray-200 rounded w-24 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded w-32 mx-auto"></div>
              </div>
            ) : (
              <>
                <h3 className="text-5xl font-bold font-plus-jakarta text-text-primary mb-2">
                  {data?.rating || "4.9"}/5
                </h3>
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="font-bold text-text-primary text-xl mb-1">Google Rating</p>
                <p className="text-text-secondary">Based on {data?.user_ratings_total || "250+"} Reviews</p>
              </>
            )}
          </motion.div>

          {/* Testimonials Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full mb-4">
              <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta text-text-primary">
                Trusted by 500+ Businesses
              </h2>
            </div>
            
            {loading && (
              <>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between animate-pulse min-h-[200px]">
                     <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                     <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
                     <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                ))}
              </>
            )}

            {!loading && data?.reviews && data.reviews.length > 0 && data.reviews.slice(0, 4).map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col justify-between"
              >
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-text-primary leading-relaxed italic line-clamp-4">"{test.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  {test.profile_photo_url && (
                    <img 
                      src={test.profile_photo_url} 
                      alt={test.author_name} 
                      width={40} 
                      height={40} 
                      className="rounded-full" 
                    />
                  )}
                  <div>
                    <h4 className="font-bold text-text-primary">{test.author_name}</h4>
                    <p className="text-sm text-text-secondary">{test.relative_time_description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {!loading && error && (
               <div className="col-span-full p-6 text-center text-red-500 bg-red-50 rounded-lg border border-red-100">
                  <p>Unable to load reviews at this time.</p>
                  <p className="text-sm text-red-400 mt-2">API Keys are missing in .env.local</p>
               </div>
            )}
            
            {!loading && (!data?.reviews || data.reviews.length === 0) && !error && (
              <div className="col-span-full p-6 text-center text-text-secondary bg-surface rounded-lg border border-border">
                  <p>No reviews found.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
