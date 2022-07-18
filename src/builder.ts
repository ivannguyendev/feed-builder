import { Message, MessageModel } from './models';

export class FeedBuilder {
  static render(obj: Partial<Message>) {
    const modelData = new MessageModel(obj);
    const errors = modelData.validateSync();
    if (errors) {
      throw errors;
    }
    const dataJson = modelData.toJSON();
    dataJson._id = String(dataJson._id);
    const data = {
      ...dataJson,
      _id: dataJson.collapse,
      state: 'unread',
      count: 1,
    };
    delete data.collapse;
    return data;
  }
}
