using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeHb.UnidadesSaudePoa.Web.Models
{
    public class Result
    {
        public string ResourceId { get; set; }
        public List<Field> Fields { get; set; }
        public List<Record> Records { get; set; }
        public Links Links { get; set; }
        public int Total { get; set; }
    }
}