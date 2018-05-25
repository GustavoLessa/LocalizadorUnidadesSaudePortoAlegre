using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeHb.UnidadesSaudePoa.Web.Models
{
    public class Pin
    {
        public Pin(Record unidade)
        {
            this.Nome = unidade.Nome;
            this.Telefone = unidade.Telefone;
            this.Endereco = unidade.Endereco;
            this.Latitude = unidade.Latitude;
            this.Longitude = unidade.Longitude;
        }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}