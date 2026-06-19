import Container from "@/src/components/layout/Container";
import { ReactNode } from "react";

export default function NavLayout({ children }: { children: ReactNode }) {
    return (
        <Container className="py-24">
            {children}
        </Container>
    );
}
