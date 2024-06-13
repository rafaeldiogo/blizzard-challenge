import { useEffect, useState } from "react";
import { GameProps } from "../types/gameType";

export const useFetchGames = () => {
  const [games, setGames] = useState<GameProps[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGames = async function () {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.brchallenges.com/api/blizzard/games`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await res.json();

        setGames(data);
      } catch (error) {
        setError("Sistema instável, tente novamente em alguns instantes.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading, error };
};
