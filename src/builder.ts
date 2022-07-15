import { Message, MessageModel } from './models';

export class FeedBuilder {
  static render(obj: Partial<Message>) {
    const modelData = new MessageModel(obj);
    const errors = modelData.validateSync();
    if (errors) {
      throw errors;
    }
    return modelData.toObject();
  }
}
