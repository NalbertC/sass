import InformationContainer from "../InformationContainer";
import SocialNetworks from "../SocialNetworks";

import "./index.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src="https://github.com/NalbertC.png" alt="Nalberth Castro" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
