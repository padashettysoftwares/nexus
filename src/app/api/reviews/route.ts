import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return NextResponse.json(
      { error: "Google Places API configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(data.error_message || "Failed to fetch from Google Places API");
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
      rating: data.result.rating || 0,
      user_ratings_total: data.result.user_ratings_total || 0,
    });
  } catch (error: any) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
