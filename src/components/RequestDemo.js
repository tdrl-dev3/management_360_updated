import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const RequestDemo = ({ requestDemo }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [employees, setEmployees] = useState("");
  const [note, setNote] = useState("");
  // console.log("success", success);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    var raw = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      work_email: email,
      company_website: companyWebsite,
      country_name: country,
      number_of_employees: employees,
      notes: note,
    });

    var requestOptions = {
      method: "POST",
      body: raw,
    };

    fetch("/api/demo", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log("result >>", result);
        setLoading(false);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Thank You. We recived your request",
          showConfirmButton: false,
          timer: 2000,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompanyWebsite("");
        setCountry("");
        setEmployees("");
        setNote("");
      })
      .catch((error) => {
        console.log("error", error);
        MySwal.fire({
          position: "center",
          icon: "error",
          title: "Oops! Something went wrong.",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div ref={requestDemo} className=" bg-odd-color py-20">
      <div className="container">
        <div className=" flex flex-col items-center">
          <div className=" mb-10">
            <h4 className=" font-poppins text-3xl">REQUEST A DEMO</h4>
          </div>

          <div className=" bg-white p-7 lg:w-6/12 md:w-8/12 sm:w-full rounded-lg border border-gray-200 shadow-xl">
            {/* <form action="/api/demo" method="post"> */}
            <form onSubmit={handleSubmit}>
              <div className=" mb-5">
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="">
                    First Name
                  </label>
                </div>
                <div className=" max-w-full">
                  <input
                    className=" rounded py-2 px-3 flex-auto w-full border border-gray focus:outline-none focus:shadow-[1px_1px_5px_2px_rgba(160,181,191)]"
                    type="text"
                    name="first_name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                  ></input>
                </div>
              </div>

              <div className=" mb-5">
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="last_name">
                    Last Name
                  </label>
                </div>
                <div className=" max-w-full">
                  <input
                    className=" rounded py-2 px-3 flex-auto w-full border border-gray focus:outline-none focus:shadow-[1px_1px_5px_2px_rgba(160,181,191)]"
                    type="text"
                    name="last_name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  ></input>
                </div>
              </div>

              <div className=" mb-5">
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="work_email">
                    Work Email
                  </label>
                </div>
                <div className=" max-w-full">
                  <input
                    className=" rounded py-2 px-3 flex-auto w-full border border-gray focus:outline-none focus:shadow-[1px_1px_5px_2px_rgba(160,181,191)]"
                    type="email"
                    name="work_email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  ></input>
                </div>
              </div>

              <div className=" mb-5">
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="company_website">
                    Company Website
                  </label>
                </div>
                <div className=" max-w-full">
                  <input
                    className=" rounded py-2 px-3 flex-auto w-full border border-gray focus:outline-none focus:shadow-[1px_1px_5px_2px_rgba(160,181,191)]"
                    type="text"
                    name="company_website"
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    value={companyWebsite}
                    required
                  ></input>
                </div>
              </div>

              <div className="mb-5">
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="country_name">
                    Country
                  </label>
                </div>
                <select
                  className="select-input"
                  name="country_name"
                  id=""
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  required
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="mb-5">
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="number_of_employees">
                    Number of Employees
                  </label>
                </div>
                <select
                  className="select-input"
                  name="number_of_employees"
                  id=""
                  onChange={(e) => setEmployees(e.target.value)}
                  value={employees}
                  required
                >
                  <option value="1-5">1 - 5</option>
                  <option value="6-20">6 - 20</option>
                  <option value="21-50">21 - 50</option>
                  <option value="50+">50+</option>
                </select>
              </div>

              <div>
                <div className=" mb-2">
                  <label className=" text-sm" htmlFor="notes">
                    Notes
                    <span className=" inline-block ml-2 text-xs text-gray-400">
                      (optional)
                    </span>
                  </label>
                </div>
                <textarea
                  className="select-input"
                  name="notes"
                  id=""
                  cols="40"
                  rows="6"
                  onChange={(e) => setNote(e.target.value)}
                  value={note}
                ></textarea>
              </div>

              <div className=" mt-3">
                {loading ? (
                  <button
                    disabled
                    type="button"
                    class="w-full text-white bg-violet-400 focus:ring-4 focus:outline-none font-medium rounded-lg transition text-sm px-5 py-2.5 text-center cursor-not-allowed"
                  >
                    <svg
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Processing...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-violet-900 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg transition text-sm px-5 py-2.5 text-center"
                  >
                    Request Demo
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
