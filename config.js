/* ==========================================================================
   Everything on the creator page comes from this file. Edit, commit, done.
   Leave a value as "" to hide it — empty donation options never show.
   ========================================================================== */
window.CREATOR = {
  name: "ChampAppDev",
  tagline: "Independent developer building free tools for players.",
  bio: "I build and maintain Champs Companion and other open-source apps in my spare time. Everything I make is free to use — support is optional and genuinely appreciated.",

  // Usernames only (not full links). Set the ones you use; empty ones are hidden.
  support: {
    githubSponsors: "",   // github.com/sponsors/<this>   — 0% fee on personal sponsorships
    kofi: "champappdev",  // ko-fi.com/<this>             — 0% fee on one-time tips
    buyMeACoffee: "",     // buymeacoffee.com/<this>      — 5% fee
    paypalMe: "",         // paypal.me/<this>             — PayPal's standard fees
  },

  projects: [
    {
      name: "Champs Companion",
      icon: "assets/champs-icon.png",
      description: "Free competitive companion for Pokémon Champions: damage calc, team builder, live regulation data, and a floating pill over the game. Unofficial fan app.",
      links: [
        { label: "Get the app", url: "" },                                   // Play Store link once published
        { label: "Privacy policy", url: "champs-companion/privacy/" },
      ],
    },
    // { name: "My other app", icon: "", description: "...", links: [{ label: "GitHub", url: "https://github.com/..." }] },
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/champappdev" },
  ],

  contactEmail: "",                         // shown on the page and the privacy policy
};
