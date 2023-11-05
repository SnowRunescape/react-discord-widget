import { statusClass } from "./constants";
import { MemberProps } from "./types";

const Member = (props: MemberProps) => {
  const { member } = props;

  return (
    <div className="member">
      <div className="memberAvatar">
        <img src={member.avatar_url} alt={member.username} />

        <span className={`memberStatus ${statusClass[member.status]}`} />
      </div>

      <span className="memberName">
        {member.username}
      </span>

      {member.game && <span className="memberGame">
        {member.game.name}
      </span>}
    </div>
  );
}

export default Member;
