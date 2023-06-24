import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOffline, setisOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setisOffline(false);
    };

    const handleOffline = () => {
      setisOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };

    // returns true or false
  }, []);
  return isOffline;
};

export default useOnline;
