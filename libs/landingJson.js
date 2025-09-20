export function landingJson(req, res) {
  res.status(200).json({
    company: {
      name: "Swagat Garments",
      tagline: "Fashion for Every State of India",
      description:
        "Swagat Garments is a leading fashion e-commerce brand catering to customers across all Indian states. We specialize in delivering high-quality, affordable, and stylish garments that reflect the vibrant culture and diversity of India.",
      industry: "Fashion & E-commerce",
      founded: "2010",
      headquarters: "Mumbai, Maharashtra, India",
    },
    services: [
      "Online Fashion Retail",
      "Pan-India Delivery",
      "Men’s, Women’s & Kids’ Apparel",
      "Ethnic & Western Wear",
      "Accessories & Footwear",
    ],
    coverage: {
      market: "All Indian States",
      deliveryPartners: ["Delhivery", "Bluedart", "Ekart"],
      paymentOptions: [
        "UPI",
        "Net Banking",
        "Credit/Debit Cards",
        "Cash on Delivery",
      ],
    },
    contact: {
      website: "https://www.swagatgarments.com",
      email: "support@swagatgarments.com",
      phone: "+91-9876543210",
    },
    socials: {
      facebook: "https://www.facebook.com/swagatgarments",
      instagram: "https://www.instagram.com/swagatgarments",
      twitter: "https://twitter.com/swagatgarments",
    },
    status: "active",
    lastUpdated: "2025-09-21T00:00:00Z",
  });
}
