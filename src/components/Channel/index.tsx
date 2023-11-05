import { ChannelProps } from "./types";

const Channel = (props: ChannelProps) => {
  const { channel } = props;

  return (
    <div className="channel">
      <div className="channelName">{channel.name}</div>

      {/* members on channel_id */}
    </div>
  );
}

export default Channel;
