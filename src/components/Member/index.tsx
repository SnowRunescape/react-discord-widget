import { MemberProps } from "./types";

const Member = (props: MemberProps) => {
  const { id, username, avatar_url, game } = props.member;

  return (
    <div key={id} className="member">
      <div>
        <img src={avatar_url} alt={username} />
      </div>

      <span>
        {username}
      </span>

      {game && <span>
        {game.name}
      </span>}
    </div>
  );
}

export default Member;