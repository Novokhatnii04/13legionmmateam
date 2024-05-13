import styled from "./greeting.module.css";
import TitleLogo from "../../../components/titlelogo/TitleLogo";

const Greeting = () => {
  return (
    <div className={styled.greeting_content}>
      <TitleLogo classname="greeting" />
      <h1 className={styled.greeting_title}>mma team</h1>
    </div>
  );
};

export default Greeting;
