using System;

namespace TheshopApi.Models
{
    public class Store
    {
        public string IdStore { get; set; }
        public string IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string AmountProduct { get; set; }
        public string TotalProduct { get; set; }
        
        public DateTime DateStore { get; set; }
    }
}