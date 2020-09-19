import baseUrl from "../config";

const IpAddress = {
    get(ip) {
      return fetch(`${baseUrl}${ip}`, {
        credentials: "include"
      }).then(res => res.json());
    }
};
  
export default IpAddress;
  