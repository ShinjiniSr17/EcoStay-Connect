"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import toast from "react-hot-toast";
export default function AIPage() {
    const [query, setQuery] = useState("");

    const [reply, setReply] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

   const handleGenerate = async () => {

    

    if (!query.trim()) {
        
        setError("Please enter your travel preferences.");
        return;
    }



    setLoading(true);
    setError("");
    setReply("");

    try {

        

        const response = await fetch(
            "http://localhost:5001/api/ai/travel-plan",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            }
        );

        

        const data = await response.json();

        
        setReply(data.reply);

    } catch (error) {
  console.error(error);
  toast.error("Failed to generate travel plan.");
  setError("Failed to generate travel plan.");
} finally {

        

        setLoading(false);
    }
};


return (
  <>
    <Navbar />

    <main className="min-h-screen bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-16">

      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h1 className="text-4xl font-bold text-center text-emerald-700">
            🌿 AI Eco Travel Planner
          </h1>

          <p className="text-center text-gray-600 mt-4">
            Tell us your travel preferences and let AI create a personalized,
            eco-friendly travel plan for you.
          </p>

          <textarea
rows={7}
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Describe your dream trip...

Examples:
• Peaceful mountain vacation under ₹5000
• Beach destination for family
• Adventure trek in Uttarakhand
• Weekend eco getaway near Delhi"

className="w-full mt-8 rounded-2xl border border-gray-300 bg-white p-5 text-gray-700 shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 outline-none transition"
/>

<div className="mt-4 flex flex-wrap gap-3">

{[
"Mountain Escape",
"Beach Vacation",
"Adventure Trek",
"Budget Weekend",
"Luxury Nature Stay"
].map((item)=>(

<button
key={item}
type="button"
onClick={()=>setQuery(item)}
className="rounded-full bg-emerald-100 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-200 transition"
>
{item}
</button>

))}

</div>

          <div className="mt-6">

            <Button
              variant="primary"
              size="lg"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? "Generating..." : " Generate Travel Plan"}
            </Button>

          </div>

          {loading && (
            <p className="mt-6 text-emerald-700 font-medium">
              🌿 Creating your personalized itinerary...
            </p>
          )}

          {error && (
            <p className="mt-6 text-red-500">
              {error}
            </p>
          )}

          {reply && (
  <div className="mt-10 rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">

    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-5">

      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
        🤖 Your Personalized Eco Travel Plan
      </h2>

      <p className="text-emerald-100 mt-2">
        Generated using Google Gemini AI
      </p>

    </div>

    <div className="p-8">

      <div className="markdown-body prose prose-emerald max-w-none">
  <ReactMarkdown>
    {reply}
  </ReactMarkdown>
</div>

    </div>

  </div>
)}



      

        </div>

      </div>

    </main>

    <Footer />

  </>
);
}
    