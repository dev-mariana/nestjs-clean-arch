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

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get created_at() {
    return this.props.created_at;
  }
}
