import Logo from "../Logo";
import eye from "../../assets/Icon.svg";
import Iphone from "../../assets/Iphone.svg";
import Realme from "../../assets/realme.svg";
import Samsung from "../../assets/Samsung.svg";
import Nokia from "../../assets/Nokia.svg";
import Phone from "../../assets/Phone2.svg";
import Trash from "../../assets/Trash.svg";
import Edit from "../../assets/Edit.svg";
function Table() {
  return (
    <div>
      <Logo></Logo>
      <div>
        <div className="ml-[140px] mr-[80px] mb-[100px] overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={Iphone} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Apple</div>
                      <div className="text-sm opacity-50">mail@gmail.com!</div>
                    </div>
                  </div>
                </td>
                <td>
                  Available
                  <br />
                </td>
                <td>200.00$</td>
                <th>
                  <button className="items-center text-white bg-[#04D58D] pb-0.5  w-20 rounded-full">
                    Available
                  </button>
                </th>
                <tfoot className="flex gap-5">
                  <img src={eye} alt="" className="pt-[25px] " />
                  <img src={Edit} alt="" className="pt-[25px] " />
                  <img src={Trash} alt="" className="pt-[25px] " />
                </tfoot>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={Realme} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Realme</div>
                      <div className="text-sm opacity-50">mail@gmail.com!</div>
                    </div>
                  </div>
                </td>
                <td>
                  Technology
                  <br />
                </td>
                <td>200.00$</td>
                <th>
                  <button className="items-center text-white bg-red-400  pb-0.5  w-20 rounded-full">
                    No Stock
                  </button>
                </th>
                <tfoot className="flex gap-5">
                  <img src={eye} alt="" className="pt-[25px] " />
                  <img src={Edit} alt="" className="pt-[25px] " />
                  <img src={Trash} alt="" className="pt-[25px] " />
                </tfoot>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={Samsung} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Samsung</div>
                      <div className="text-sm opacity-50">mail@gmail.com!</div>
                    </div>
                  </div>
                </td>
                <td>
                  Technology
                  <br />
                </td>
                <td>200.00$</td>
                <th>
                  <button className="items-center text-black bg-yellow-400 pb-0.5  w-20 rounded-full">
                    Flash Sale
                  </button>
                </th>
                <tfoot className="flex gap-5">
                  <img src={eye} alt="" className="pt-[25px] " />
                  <img src={Edit} alt="" className="pt-[25px] " />
                  <img src={Trash} alt="" className="pt-[25px] " />
                </tfoot>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={Nokia} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Nokia</div>
                      <div className="text-sm opacity-50">mail@gmail.com!</div>
                    </div>
                  </div>
                </td>
                <td>
                  Technology
                  <br />
                </td>
                <td>200.00$</td>
                <th>
                  <button className="items-center text-white bg-green-400 pb-0.5  w-20 rounded-full">
                    Available
                  </button>
                </th>
                <tfoot className="flex gap-5">
                  <img src={eye} alt="" className="pt-[25px] " />
                  <img src={Edit} alt="" className="pt-[25px] " />
                  <img src={Trash} alt="" className="pt-[25px] " />
                </tfoot>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={Phone} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Blackberry</div>
                      <div className="text-sm opacity-50">mail@gmail.com!</div>
                    </div>
                  </div>
                </td>
                <td>
                  Technology
                  <br />
                </td>
                <td>200.00$</td>
                <th>
                  <button className="items-center text-white bg-red-400 pb-0.5  w-20 rounded-full">
                    No Stock
                  </button>
                </th>
                <tfoot className="flex gap-5">
                  <img src={eye} alt="" className="pt-[25px] " />
                  <img src={Edit} alt="" className="pt-[25px] " />
                  <img src={Trash} alt="" className="pt-[25px] " />
                </tfoot>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Table;
