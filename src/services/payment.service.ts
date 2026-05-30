import { delay } from "../lib/utils";
import { PAYMENTS_MOCK, paymentSettingsMock } from "../mocks/index.mock";
import { CurrencyType, Payment, PaymentGateway, PaymentSettingsState, PaymentStatus } from "../types";

const paymentsDB: Payment[] = [...PAYMENTS_MOCK];

let settings: PaymentSettingsState = {
  ...paymentSettingsMock,
};

export const paymentSettingsService = {
  // GET ALL PAYMENTS
  async getPayments(): Promise<Payment[]> {
    await delay(400);
    return [...paymentsDB];
  },

  // GET ONE PAYMENT DETAIL
  async getPaymentLog(id: string): Promise<Payment | null> {
    await delay(300);

    return paymentsDB.find((item) => item.transactionId === id) ?? null;
  },

  // GET PAYMENT BY STATUS
  async getPaymentsByStatus(status?: PaymentStatus): Promise<Payment[]> {
    await delay(300);

    if (!status) return [...paymentsDB];

    return paymentsDB.filter((p) => p.status === status);
  },

  //  UPDATE PAYMENT STATUS
  async updatePaymentStatus(
    id: string,
    status: PaymentStatus,
  ): Promise<Payment | null> {
    await delay(200);

    const index = paymentsDB.findIndex((log) => log.transactionId === id);

    if (index === -1) {
      return null;
    }

    paymentsDB[index] = {
      ...paymentsDB[index],
      status,
    };

    return paymentsDB[index];
  },

  // FETCH SETTINGS
  async getPaymentSettings(): Promise<PaymentSettingsState> {
    await delay(200);
    return settings;
  },

  // UPDATE PAYMENT GATEWAY
  async updateGateway(
    gateway: PaymentGateway,
  ): Promise<PaymentSettingsState> {
    await delay(300);

    settings = {
      ...settings,
      activeGateway: gateway,
    };

    return settings;
  },

  // UPDATE CURRENCY
  async updateCurrency(
    currency: CurrencyType,
  ): Promise<PaymentSettingsState> {
    await delay(300);

    settings = {
      ...settings,
      defaultCurrency: currency,
    };

    return settings;
  },
};