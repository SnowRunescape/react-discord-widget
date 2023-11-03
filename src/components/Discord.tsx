import useDiscord from '../hooks/useDiscord';

function Discord(props: DiscordType) {
  const { data } = useDiscord(props);

  return (
    <div>
      {data ? (
        <div>
          <h1>Discord Widget Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Discord;
