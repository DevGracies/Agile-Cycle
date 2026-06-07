import { ReactNode } from "react";
import Container from "../layout/Container";

interface CheckoutLayoutProps {
  summary: ReactNode;
  children: ReactNode;
}

export default function CheckoutLayout({
  summary,
  children,
}: CheckoutLayoutProps) {
  return (
    <Container className="py-4">
      <div className="flex flex-col-reverse md:grid gap-8 lg:grid-cols-[400px_1fr]">
        <aside className="order-2 lg:order-1">{summary}</aside>

        <section className="order-1 lg:order-2">{children}</section>
      </div>
    </Container>
  );
}
