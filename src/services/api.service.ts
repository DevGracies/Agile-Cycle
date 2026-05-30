type ApiRequestConfig<T> = {
  endpoint?: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  mockData?: T;
  useMock?: boolean;
  delay?: number;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function apiRequest<T>({
  endpoint,
  method = "GET",
  body,
  mockData,
  useMock = false,
  delay = 500,
}: ApiRequestConfig<T>): Promise<T> {
  // USE MOCK DATA
  if (useMock || !endpoint) {
    await sleep(delay);

    if (mockData === undefined) {
      throw new Error("Mock data not provided");
    }

    return structuredClone(mockData);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);

    // FALLBACK TO MOCK DATA
    if (mockData !== undefined) {
      console.warn("Falling back to mock data");

      await sleep(delay);

      return structuredClone(mockData);
    }

    throw error;
  }
}