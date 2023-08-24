import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="text-xl border-b-2  border-blue-200 pb-2">Dashboard</div>
      <div className="flex pt-8 justify-around">
        <div className="card w-2/5 h-28 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1"></div>
    
          </div>
        </div>
        <div className="card w-2/5 h-28 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1"></div>

          </div>
        </div>
      </div>
      <div className="flex pt-8 justify-around">
        <div className="card w-2/5 h-28 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1"></div>
            <div className="inline-flex">
      
            </div>
          </div>
        </div>
        <div className="card w-2/5 h-28 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1"></div>

            {/* <button className="btn rounded-md bg-gray-200 text-white mt-4 p-2 mx-2">
              <Delete />
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2">
              <Edit />
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2">
              <AddCircle />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
