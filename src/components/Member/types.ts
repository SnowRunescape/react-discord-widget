export type MemberProps = {
  member: Member;
}

export type MemberStatus = {
  [status in Member['status']]: string
}
