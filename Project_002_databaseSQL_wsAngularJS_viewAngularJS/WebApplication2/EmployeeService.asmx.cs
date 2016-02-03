using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace WebApplication2
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployees()
        {
            //LIST
            List<dao.Employee> listEmployees = new List<dao.Employee>();

            //CONNECT TO DB
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                //QUERY
                SqlCommand cmd = new SqlCommand("SELECT * FROM tblEmployees", con);

                //OPEN CONNECTION
                con.Open();

                //READER
                SqlDataReader rdr = cmd.ExecuteReader();

                //LOOP
                while (rdr.Read())
                {
                    dao.Employee employee = new dao.Employee();
                    employee.id = Convert.ToInt32(rdr["Id"]);
                    employee.name = (rdr["Name"].ToString());
                    employee.gender = (rdr["Gender"].ToString());
                    employee.salary = Convert.ToInt32(rdr["Salary"]);

                    //ADD TO LIST
                    listEmployees.Add(employee);
                }
            }
            //JAVASCRIPT SERIALIZER
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listEmployees));
        }
    }
}
