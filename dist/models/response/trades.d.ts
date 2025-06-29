import { TradeType } from "../enums/tradeType.js";
export interface TradesResponse {
    trade_id: number;
    price: number;
    base_volume: number;
    quote_volume: number;
    timestamp: string;
    type: TradeType;
}
