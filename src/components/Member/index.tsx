import { MemberProps } from "./types";

const Member = (props: MemberProps) => {
  const { id, username, avatar_url, game } = props.member;

  return (
    <div key={id} className="member">
      <div>
        <img src={avatar_url} alt={username} />
      </div>

      <span className="memberName">
        {username}
      </span>

      {game && <span className="memberGame">
        {game.name}
      </span>}
    </div>
  );
}

export default Member;