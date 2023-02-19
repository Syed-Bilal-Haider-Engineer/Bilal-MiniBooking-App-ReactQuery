import { useQuery, useMutation } from "react-query";
import axios from "axios";
import swal from "sweetalert";
import { baseURL } from "../../URL/BaseURL";
// fetching data from server sides
export const useCustomhook = ({ route, method }) => {
  let option = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const fetchdata = async () => {
    const res = await fetch(`${baseURL}/${route}`, option);
    if (res?.status === 200) {
      return await res.json();
    }
  };
  const result = useQuery("rooms", fetchdata, {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  });
  return result;
};
////////////////////////////error handling start here///////////////////////
const onSuccess = async (data) => {
  console.log("data:", data);
  data?.data?.payment === "ok" &&
    swal("congratulations!", "Payment your successfully", "success");
  data?.data?.payment === "error" && swal("Oops!", data?.message, "error");
  if (data?.data.status === "error") {
    return swal(data?.data.message, "error");
  }
  if (data?.data?.token) {
    localStorage.setItem("tokenbook", data?.data?.token);
    window.location = "/";
  }
  if (data?.data.user) {
    return swal("Good job", data?.data.message, "success");
  } else {
    return swal("Oop!", data?.data.message, "error");
  }
};
const onError = async (error) => {
  console.log(error);
};
////////////////// post data from server side///////////
export const useSendPost = ({ routepath }) => {
  return useMutation(
    async (user) => {
      let data = await axios.post(`${baseURL}/${routepath}`, user);
      console.log("data signup", data);
      return data;
    },
    {
      onSuccess,
      onError,
    }
  );
};

//////////////////////Token verify /////////////////////
export const useTokenverify = () => {
  const token = localStorage.getItem("tokenbook");
  const tokenverify = async () => {
    const res = await fetch(`${baseURL}/verifytoken`, {
      method: "GET",
      headers: {
        "x-access-token": token,
      },
    });
    return res.json();
  };
  const result = useQuery("verfiy", tokenverify, {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    onSuccess: async (data) => {
      if (data?.name || data?.userid) {
        localStorage.setItem("name", data?.name);
        localStorage.setItem("userid", data?.userid);
        return true;
      }
      if (!data?.token) {
        localStorage.clear();
      }
    },
    onError: async (error) => {
      return false;
    },
  });
  return result;
};

////////////////Token verify end here///////////////
