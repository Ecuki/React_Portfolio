import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../../Login/react-auth0-spa";

const PrivateRouter = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  const PATH = "/React_Portfolio";
  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname + PATH }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;
  console.log(path);
  return <Route path={PATH + path} render={render} {...rest} />;
};
export default PrivateRouter;
