// src/models/response/getAccountTrades.ts
export interface AccountTrade {
  OMSId: number;
  ExecutionId: number;
  TradeId: number;
  OrderId: number;
  AccountId: number;
  AccountName: string;
  SubAccountId: number;
  ClientOrderId: number;
  InstrumentId: number;
  Side: string;
  OrderType: string;
  Quantity: number;
  RemainingQuantity: number;
  Price: number;
  Value: number;
  CounterParty: string;
  OrderTradeRevision: number;
  Direction: string;
  IsBlockTrade: boolean;
  Fee: number;
  FeeProductId: number;
  OrderOriginator: number;
  UserName: string;
  TradeTimeMS: number;
  MakerTaker: string;
  AdapterTradeId: number;
  InsideBid: number;
  InsideBidSize: number;
  InsideAsk: number;
  InsideAskSize: number;
  IsQuote: boolean;
  CounterPartyClientUserId: number;
  NotionalProductId: number;
  NotionalRate: number;
  NotionalValue: number;
  TradeTime: number;
}

export type GetAccountTradesResponse = AccountTrade[];
