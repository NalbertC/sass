import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "./index.sass";

const socialNetworks = [
  {
    name: "linkedin",
    link: "#",
    icon: <FaLinkedin />,
  },
  { name: "github", link: "https://github.com/NalbertC", icon: <FaGithub /> },
  {
    name: "instagram",
    link: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(
        (network) => (
          // {
          <a
            href={network.link}
            className="social-btn"
            id={network.name}
            key={network.name}
          >
            {network.icon}
          </a>
        )
        // }
      )}
    </section>
  );
};

export default SocialNetworks;
