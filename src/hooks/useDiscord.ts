import { useCallback, useEffect, useState } from "react";
import { Server } from './types'

const useDiscord = (props: DiscordType) => {
  const {
    id,
    delay = 120
  } = props;

  const [data, setData] = useState<Server | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDiscordWidgetData = useCallback(async () => {
    try {
      const response = await fetch(`https://discord.com/api/guilds/${id}/widget.json`);

      if (response.ok) {
        const data = await response.json();
        setData(data);
        setError(null);
      }
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const remove = () => {
    setData(null);
    setError(null);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchDiscordWidgetData();
  }, [fetchDiscordWidgetData]);

  useEffect(() => {
    if (delay < 1) {
      return;
    }

    const intervalId = setInterval(() => {
      fetchDiscordWidgetData();
    }, delay * 1000)

    return () => {
      clearInterval(intervalId);
    };
  }, [delay, fetchDiscordWidgetData]);

  return {
    isLoading: isLoading,
    error,
    data,
    refetch: fetchDiscordWidgetData,
    remove,
    delay,
  };
};

export default useDiscord;