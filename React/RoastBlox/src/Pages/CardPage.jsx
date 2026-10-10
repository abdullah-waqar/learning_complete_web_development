import Card from '../Components/Card';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  dangerouslyAllowBrowser: true 
});

const CardPage = () => {
  const [profile, setProfile] = useState(null);
  const [profileImg, setProfileImg] = useState("");
  const [roastText, setRoastText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  let { playerId } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsLoading(true); 

        const [profileResponse, imageResponse] = await Promise.all([
          fetch(`https://users.roproxy.com/v1/users/${playerId}`),
          fetch(`https://thumbnails.roproxy.com/v1/users/avatar-headshot?userIds=${playerId}&size=420x420&format=Png&isCircular=false`)
        ]);

        const profileJson = await profileResponse.json();
        const imageJson = await imageResponse.json();
        
        if (profileJson.errors) {
          alert("Player not found!");
          setIsLoading(false);
          return;
        }

        setProfile(profileJson);
        setProfileImg(imageJson.data[0].imageUrl);

        const prompt = `Write a savage, funny, exactly two-line roast for this Roblox player based on their profile data:
          - Username: ${profileJson.name}
          - Account Created Date: ${profileJson.created}
          - Bio: "${profileJson.description}"
          - Is Banned: ${profileJson.isBanned}`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: prompt,
        });

        setRoastText(response.text);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, [playerId]); 

  
  if (isLoading || !profile) {
    return (
      <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-4">
        <p className="text-stone-400 font-mono animate-pulse">GENERATING ROAST... PLEASE WAIT </p>
      </div>
    );
  }

  const { displayName, description, isBanned, id } = profile;

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-4">
      <Card 
        displayName={displayName} 
        description={description} 
        isBanned={isBanned} 
        img={profileImg} 
        id={id} 
        roastText={roastText} 
      />
    </div>
  );
};

export default CardPage;