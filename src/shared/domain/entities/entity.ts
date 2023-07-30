import { v4 as uuid } from 'uuid';

export abstract class Entity<Props = any> {
  readonly _id: string;
  readonly props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id || uuid();
  }

  get id() {
    return this.id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
