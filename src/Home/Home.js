import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/posts"), [navigate]);
  return <></>;
};

export default Home;
