export type UserProps = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};

export class UserEntity {
  constructor(readonly props: UserProps) {
    this.props.created_at = this.props.created_at ?? new Date();
  }
}
