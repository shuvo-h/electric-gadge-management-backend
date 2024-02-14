import { Types } from 'mongoose';

export type TSalesOrder = {
  product: Types.ObjectId;
  seller: Types.ObjectId;
  quantity: number;
  buyerName: string;
  contactNumber: string;
  soldDate: Date;
  totalAmount: number;
};
