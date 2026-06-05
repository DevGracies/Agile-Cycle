export default function CheckoutFooter() {
  const links = [
    "Refund Policy",
    "Shipping",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <footer className="mt-12 pt-6">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-primary underline transition hover:text-primary"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}