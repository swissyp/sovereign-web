import { Content } from './types';

export const content: Content = {
  title: "Sovereign Web",
  description: "A curated collection of decentralized applications. Built for sovereignty, privacy, and complete user control.",
  criteria: [
    "Full Decentralization: No reliance on centralized servers or intermediaries.",
    "End-to-End Architecture: Complete solutions with fully decentralized backend and frontend.",
    "Open Source: Publicly accessible codebases for transparency and collaboration.",
    "Privacy by Design: User data is protected through encryption and decentralized identity.",
    "Resilience: Censorship-resistant and immune to single points of failure."
  ],
  apps: [
    {
      name: "DSCVR",
      description: "A decentralized social platform where users control their content and interactions.",
      url: "https://dscvr.one",
      alternative: {
        name: "Reddit",
        color: "#FF4500"
      }
    },
    {
      name: "OpenChat",
      description: "A secure messaging app with no reliance on centralized servers.",
      url: "https://oc.app",
      alternative: {
        name: "Telegram",
        color: "#0088cc"
      }
    },
    {
      name: "Dmail",
      description: "A fully decentralized email platform providing encrypted communication, cross-chain notifications, and data sovereignty through user-controlled canisters.",
      url: "https://dmail.ai",
      alternative: {
        name: "Gmail",
        color: "#EA4335"
      }
    },
    {
      name: "Nuance",
      description: "A decentralized publishing platform empowering creators with full ownership of their content.",
      url: "https://nuance.xyz",
      alternative: {
        name: "Medium",
        color: "#000000"
      }
    },
    {
      name: "uBin",
      description: "A decentralized file storage and management solution where users own their storage canisters, enabling complete control over their data with intuitive file management features.",
      url: "https://h3cjw-syaaa-aaaam-qbbia-cai.ic0.app/",
      alternative: {
        name: "Dropbox",
        color: "#0061FF"
      }
    }
  ]
};