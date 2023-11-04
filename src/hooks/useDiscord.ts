import { fetchDiscordWidget } from "@Discord/services/discord";
import { useCallback, useEffect, useState } from "react";

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
      const response = await fetchDiscordWidget(id);

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
    if (!id) {
      return;
    }

    fetchDiscordWidgetData();
  }, [fetchDiscordWidgetData]);

  useEffect(() => {
    if (!id || delay < 1) {
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
    isLoading,
    error,
    data,
    refetch: fetchDiscordWidgetData,
    remove,
    delay,
  };
};

export default useDiscord;