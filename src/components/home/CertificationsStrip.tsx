const certsStrip = "/assets/certs-strip.png";

const CertificationsStrip = () => (
  <section className="border-t border-border/40 bg-muted/50 py-10">
    <div className="container">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Our Certifications & Partner Accreditations
      </p>
      <div className="flex items-center justify-center">
        <img
          src={certsStrip}
          alt="Zoom Platinum Partner, Dialpad Certified Deployment Partner, Avaya Cloud Office Certified Delivery Partner, RingCentral Certified Delivery Partner"
          className="max-h-40 w-full max-w-4xl object-contain"
        />
      </div>
    </div>
  </section>
);

export default CertificationsStrip;
