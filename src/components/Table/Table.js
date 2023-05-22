import EMP_DATA from "../../store/tableData";

const Table = () => {

  return (
    <>
      <div className="container mx-auto"
        >
        <table className="table-auto w-full text-center border border-slate-400 border-separate border-spacing-0.5">
          {/* <caption className="my-10 text-4xl">Horizontal Front End Department</caption> */}

          {/* Correct Approach: */}

          {/* <thead>
                <tr className="bg-cyan-400 text-2xl">
                    <th scope="row" className="border border-slate-300">ID</th>
                    <th scope="row" className="border border-slate-300">Name</th>
                    <th scope="row" className="border border-slate-300">Role</th>
                    <th scope="row" className="border border-slate-300">Project</th>
                    <th scope="row" className="border border-slate-300">Allocation</th>
                </tr>
            </thead> */}

          <tbody className="bg-cyan-100 text-lg">
            {/* Wrong Approach */}
            <tr className="bg-cyan-400 text-2xl">
              <td>ID</td>
              <td>Name</td>
              <td>Role</td>
              <td>Project</td>
              <td>Allocation</td>
            </tr>

            {EMP_DATA.map((emp, index) => {
              return (
                <tr key={index}>
                  <td className="border border-slate-300">{emp.id}</td>
                  <td className="border border-slate-300">{emp.name}</td>
                  <td className="border border-slate-300">{emp.role}</td>
                  <td className="border border-slate-300">{emp.project}</td>
                  <td className="border border-slate-300">{emp.occupied}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
