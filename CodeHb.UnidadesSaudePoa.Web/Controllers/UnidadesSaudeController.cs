using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using System.Net.Http.Headers;
using CodeHb.UnidadesSaudePoa.Web.Models;

namespace CodeHb.UnidadesSaudePoa.Web.Controllers
{
    public class UnidadesSaudeController : Controller
    {
        HttpClient client = new HttpClient();

        public UnidadesSaudeController()
        {
            client.BaseAddress = new Uri("http://datapoa.com.br");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        // GET: UnidadesSaude
        public ActionResult Index()
        {
            UnidadeSaude unidades = new UnidadeSaude();
            HttpResponseMessage response = client.GetAsync("/api/action/datastore_search?resource_id=ecf0e670-2968-4a01-b256-69f64e3e9ca2").Result;
            if (response.IsSuccessStatusCode)
            {
                unidades = response.Content.ReadAsAsync<UnidadeSaude>().Result;
            }
            return View(unidades);
        }
    }
}