using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Http.Headers;
using CodeHb.UnidadesSaudePoa.Web.Models;
using System.Net.Http;

namespace CodeHb.UnidadesSaudePoa.Web.Controllers
{
    public class MapasController : Controller
    {
        HttpClient client = new HttpClient();

        public MapasController()
        {
            client.BaseAddress = new Uri("http://datapoa.com.br");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        // GET: Mapas
        public ActionResult Mapa()
        {
            UnidadeSaude unidade = new UnidadeSaude();
            HttpResponseMessage response = client.GetAsync("/api/action/datastore_search?resource_id=ecf0e670-2968-4a01-b256-69f64e3e9ca2").Result;
            if (response.IsSuccessStatusCode)
            {
                unidade = response.Content.ReadAsAsync<UnidadeSaude>().Result;
            }
            return View(unidade);
        }
    }
}