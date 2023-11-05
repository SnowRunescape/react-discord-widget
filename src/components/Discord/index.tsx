import useDiscord from '@Discord/hooks/useDiscord';
import Channel from '@Discord/components/Channel';
import Member from '@Discord/components/Member';
import DiscordLogo from '@Discord/components/DiscordLogo';
import StyledDiscord from './StyledDiscord';
import { DiscordProps } from './types';

const Discord = (props: DiscordProps) => {
  const { id, delay } = props;

  const { data } = useDiscord({
    id,
    delay,
  });

  return (
    <StyledDiscord {...props}>
      <div className="header">
        <DiscordLogo />

        <span><strong>{data?.members.length ?? 0}</strong> Members Online</span>
      </div>

      <div className="body">
        {data?.channels && <div>
          {data.channels.map(channel => <Channel key={channel.id} channel={channel} />)}
        </div>}

        <div className="memberOnlines">MEMBERS ONLINE</div>

        <div>
          {data?.members && data?.members.map(member => <Member key={member.id} member={member} />)}
        </div>
      </div>

      <div className="footer">
        <span className="footerInfo">Hangout with people who get it</span>
        {data?.instant_invite.length && <a className="buttonJoin" href={data?.instant_invite} target="_blank">Join Discord</a>}
      </div>
    </StyledDiscord>
  )
}

export default Discord;
