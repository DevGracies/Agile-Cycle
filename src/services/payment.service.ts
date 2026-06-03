import { delay } from "../lib/utils";
import {
  PAYMENTS_MOCK,
  paymentSettingsMock,
} from "../mocks/index.mock";
import {
  CurrencyType,
  Payment,
  PaymentGateway,
  PaymentSettingsState,
  PaymentStatus,
} from "../types/payment";

const paymentsState: Payment[] = structuredClone(PAYMENTS_MOCK);

let settingsState: PaymentSettingsState =
  structuredClone(paymentSettingsMock);


export const paymentSettingsService = {

  async getPayments(): Promise<Payment[]> {
    await delay(400);
    return structuredClone(paymentsState);
  },

  async getPaymentLog(
    id: string
  ): Promise<Payment | null> {
    await delay(300);

    const payment =
      paymentsState.find(
        (item) => item.transactionId === id
      ) ?? null;

    return payment
      ? structuredClone(payment)
      : null;
  },

  async getPaymentsByStatus(
    status?: PaymentStatus
  ): Promise<Payment[]> {
    await delay(300);

    const filtered = status
      ? paymentsState.filter(
          (p) => p.status === status
        )
      : paymentsState;

    return structuredClone(filtered);
  },

  async updatePaymentStatus(
    id: string,
    status: PaymentStatus
  ): Promise<Payment | null> {
    await delay(200);

    const index = paymentsState.findIndex(
      (log) => log.transactionId === id
    );

    if (index === -1) return null;

    paymentsState[index] = {
      ...paymentsState[index],
      status,
    };

    return structuredClone(paymentsState[index]);
  },

  async getPaymentSettings(): Promise<PaymentSettingsState> {
    await delay(200);
    return structuredClone(settingsState);
  },

  async updateGateway(
    gateway: PaymentGateway
  ): Promise<PaymentSettingsState> {
    await delay(300);

    settingsState = {
      ...settingsState,
      activeGateway: gateway,
    };

    return structuredClone(settingsState);
  },

  async updateCurrency(
    currency: CurrencyType
  ): Promise<PaymentSettingsState> {
    await delay(300);

    settingsState = {
      ...settingsState,
      defaultCurrency: currency,
    };

    return structuredClone(settingsState);
  },
};