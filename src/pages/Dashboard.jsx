import {
  Icon,
  Icon_1,
  Icon_2,
  Icon_3,
  MoreVertIcon,
  cupIcon,
  moreHorizontal,
} from "../assets";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DataTable } from "mantine-datatable";

const Dashboard = () => {
  const data = [
    {
      name: "2015",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2016",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2017",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2018",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "2019",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "2020",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "2021",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data2 = [
    {
      name: "2021",
      uv: 3490,
    },
  ];

  // Custom Y-axis tick formatter function
  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value;
  };
  return (
    <>
      {/* card section start */}
      <div className="w-full py-4 px-6 flex justify-between gap-4 ">
        {/* card 1 */}
        <div className="w-4/12 flex items-end card">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="text-[20px] font-semibold">
                Congratulations Howard 🎉
              </span>
              <span className="text-[14px] text-gray-500">
                Best seller of the month
              </span>
            </div>
            <span className="py-2 text-blue-600 text-[24px]">$42.8k</span>
            <button className="text-center w-24 rounded text-white bg-blue-600 py-1 px-1">
              View Sales
            </button>
          </div>
          <img className="max-h-[90px] w-[70px]" src={cupIcon} alt="" />
        </div>
        {/* card 2 */}
        <div className="w-8/12 flex flex-col gap-8 card">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[20px] font-semibold">Transactions</span>
              <span className="text-[14px] text-gray-500">
                Total 48.5% Growth 😎 this month
              </span>
            </div>
            <img className="" src={MoreVertIcon} alt="" />
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <img className="bg-blue-600 rounded p-1.5" src={Icon} alt="" />
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Sales</span>
                <span className="text-xl font-semibold">245k</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img className="bg-green-500 rounded p-1.5" src={Icon_1} alt="" />
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Customers</span>
                <span className="text-xl font-semibold">12.5k</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="bg-yellow-500 rounded p-1.5"
                src={Icon_2}
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Product</span>
                <span className="text-xl font-semibold">1.54k</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img className="bg-sky-500 rounded p-1.5" src={Icon_3} alt="" />
              <div className="flex flex-col">
                <span className="text-[12px] text-gray-500">Revenue</span>
                <span className="text-xl font-semibold">$88k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section end */}

      {/* chart section start */}

      <div className="w-full py-2 px-6 flex justify-between gap-4 ">
        <div className="card w-8/12 flex">
          {/* total profit chart  */}
          <div className="w-8/12 border-r-2">
            <h2 className="text-xl font-semibold">Total Profit</h2>
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  // width={500}
                  // height={250}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatYAxisTick} />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar
                    dataKey="pv"
                    stackId="a"
                    fill="#1570EF"
                    shape={<CustomBar />}
                  />
                  <Bar
                    dataKey="uv"
                    stackId="a"
                    fill="#56CA00"
                    shape={<CustomBar />}
                  />
                  <Bar
                    dataKey="amt"
                    stackId="a"
                    fill="#8A8D93"
                    shape={<CustomBar />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* balance report view */}
          <div className="w-4/12 px-3">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[24px] font-semibold">$482.85k</span>
                <span className="text-sm font-normal text-gray-500">
                  Last month balance $234.40k
                </span>
              </div>
              <img src={MoreVertIcon} alt="" />
            </div>
            <div className=" flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2">
                <img
                  className="bg-green-200  rounded p-1.5"
                  src={Icon}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-gray-700">
                    $48,568.20
                  </span>
                  <span className="text-[12px] text-gray-500 ">
                    Total Profit
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  className="bg-blue-200  rounded p-1.5"
                  src={Icon_1}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-gray-700">
                    $38,453.25
                  </span>
                  <span className="text-[12px] text-gray-500 ">
                    Total Income
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  className="backdrop-contrast-50 backdrop-brightness-50 bg-white/30 rounded p-1.5"
                  src={Icon_2}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-gray-700">
                    $2,453.45
                  </span>
                  <span className="text-[12px] text-gray-500 ">
                    Total Expense
                  </span>
                </div>
              </div>

              <button className="text-center uppercase w-full rounded text-white bg-blue-600 py-1 px-1">
                View Report
              </button>
            </div>
          </div>
        </div>

        {/* weekly overview */}
        <div className="card w-4/12 ">
          <div className="flex justify-between">
            <span className="text-xl font-semibold">Weekly Overview</span>
            <img src={MoreVertIcon} alt="" />
          </div>
          <div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart
                data={data2}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis tickFormatter={formatYAxisTick} />
                <Bar
                  dataKey="uv"
                  stackId="a"
                  fill="#1570EF"
                  shape={<CustomBar />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 py-3">
            <span className="text-2xl font-semibold">45%</span>
            <span className="text-sm font-normal text-gray-500">
              Your sales performance is 45% 😎 better compared to last month
            </span>
          </div>
          <button className="text-center uppercase w-full rounded text-white bg-blue-600 py-1 px-1">
            Details
          </button>
        </div>
      </div>

      {/* chart section end */}

      {/* table section start */}

      <div className="w-full py-2 px-6 flex justify-between gap-4 ">
        {/* recent order table  */}
        <div className="card w-8/12 flex flex-col">
          <div className="flex justify-between items-center px-2 mb-3">
            <span className="text-lg font-semibold">Recent Orders</span>
            <img src={moreHorizontal} alt="" />
          </div>
          <DataTable
            className="w-full"
            // withBorder
            withColumnBorders
            records={[
              {
                trackingNo: "#874353",
                productName: "MacBook Pro M2",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
              {
                trackingNo: "#874357",
                productName: "Iphone 14 Pro Max",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
              {
                trackingNo: "#874359",
                productName: "ipad pro 2022",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
              {
                trackingNo: "#874355",
                productName: "Imac 2022",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
              {
                trackingNo: "#874359",
                productName: "Apple Smart Watch",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
              {
                trackingNo: "#874352",
                productName: "MacBook Pro M2",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
              {
                trackingNo: "#874351",
                productName: "Iphone 13 Pro Max",
                perProductPrice: 120000,
                quantity: 12,
                totalPrice: 1400000,
              },
            ]}
            columns={[
              {
                accessor: "trackingNo",
                title: "Tracking no",
                width: "40%",
                sortable: true,
              },
              { accessor: "productName", title: "Name", width: "60%" },
              {
                accessor: "perProductPrice",
                title: "Price",
                width: 160,
                sortable: true,
              },
              { accessor: "quantity", title: "Total Order", sortable: true },
              { accessor: "totalPrice", title: "Total Amount", sortable: true },
            ]}
            //   sortStatus={sortStatus}
            //   onSortStatusChange={setSortStatus}
          />
        </div>
        {/* top selling products */}
        <div className="card w-4/12 ">
          <div className="flex justify-between items-center px-2 mb-6">
            <span className="text-lg font-semibold">Top selling Products</span>
            <img src={moreHorizontal} alt="" />
          </div>
          {/* product list 1 */}
          <div className="flex my-2 px-2 gap-4">
            <img
              className="h-[80px] w-[80px] object-cover rounded"
              src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div>
              <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
              <div className="flex gap-2 my-1.5">
                {Array(Number(4))
                  .fill()
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    );
                  })}
              </div>
              <span className="text-[16px] text-gray-700">$1,200.00</span>
            </div>
          </div>
          <hr />
          {/* product list 2 */}
          <div className="flex my-2 px-2 gap-4">
            <img
              className="h-[80px] w-[80px] object-cover rounded"
              src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div>
              <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
              <div className="flex gap-2 my-1.5">
                {Array(Number(4))
                  .fill()
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    );
                  })}
              </div>
              <span className="text-[16px] text-gray-700">$1,200.00</span>
            </div>
          </div>
          <hr />
          {/* product list 3 */}
          <div className="flex my-2 px-2 gap-4">
            <img
              className="h-[80px] w-[80px] object-cover rounded"
              src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div>
              <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
              <div className="flex gap-2 my-1.5">
                {Array(Number(4))
                  .fill()
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    );
                  })}
              </div>
              <span className="text-[16px] text-gray-700">$1,200.00</span>
            </div>
          </div>
          <hr />
          {/* product list 4 */}
          <div className="flex my-2 px-2 gap-4">
            <img
              className="h-[80px] w-[80px] object-cover rounded"
              src="https://images.unsplash.com/photo-1678059285316-f69c45482d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div>
              <span className="text-[16px] text-gray-700">MacBook Pro M2</span>
              <div className="flex gap-2 my-1.5">
                {Array(Number(4))
                  .fill()
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    );
                  })}
              </div>
              <span className="text-[16px] text-gray-700">$1,200.00</span>
            </div>
          </div>
        </div>
      </div>
      {/* table section end */}
    </>
  );
};

export default Dashboard;

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={10}
        height={height - 2}
        fill={fill}
        rx={7} // Border radius value
        ry={7} // Border radius value
      />
    </g>
  );
};
