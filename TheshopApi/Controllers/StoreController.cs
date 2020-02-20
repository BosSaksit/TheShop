using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheshopApi.Models;

namespace TheshopApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    public class StoreController : ControllerBase
    {
        
        public static List<Store> StoreData = new List<Store>
        {
            new Store { IdStore = "store01", IdProduct = "201201", NameProduct = "product01", AmountProduct = "10", TotalProduct = "30" ,DateStore = new DateTime(2020, 01, 15)},
            new Store { IdStore = "store02", IdProduct = "201202", NameProduct = "product02", AmountProduct = "20", TotalProduct = "40" ,DateStore = new DateTime(2020, 02, 15)},
            new Store { IdStore = "store03", IdProduct = "201203", NameProduct = "product03", AmountProduct = "30", TotalProduct = "50" ,DateStore = new DateTime(2020, 02, 17)},
            new Store { IdStore = "store04", IdProduct = "201204", NameProduct = "product04", AmountProduct = "40", TotalProduct = "60" ,DateStore = new DateTime(2020, 04, 15)},
        };

        [HttpGet]
        public ActionResult<IEnumerable<Store>> GetAllStore()
        {
            return StoreData.ToArray();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Store>> GetFilterByMonthStore()
        {
           
            return StoreData.FindAll(it => it.DateStore.Month == 01);
        }

        [HttpGet("{id}")]
        public ActionResult<Store> GetStoreByidProduct(string id)
        {
            return StoreData.FirstOrDefault(it => it.IdProduct == id.ToString());
        }

         [HttpGet("{id}")]
        public ActionResult<Store> GetStoreByidStore(string id)
        {
            return StoreData.FirstOrDefault(it => it.IdStore == id.ToString());
        }

        [HttpPost]
        public Store AddStoreData ([FromBody] Store Storex)
        {
            var id = Guid.NewGuid().ToString();
            int total;
            if (Storex.TotalProduct == null)
            {
                Storex.TotalProduct = "0";
                total = int.Parse(Storex.TotalProduct) + int.Parse(Storex.AmountProduct);
            }
            else
            {
                total = int.Parse(Storex.TotalProduct) + int.Parse(Storex.AmountProduct);
            }

            var item = new Store
            {
                IdStore = id.ToString(),
                IdProduct = Storex.IdProduct,
                NameProduct = Storex.NameProduct,
                AmountProduct = Storex.AmountProduct,
                TotalProduct = total.ToString(),
                DateStore = DateTime.Now
            };
            StoreData.Add(item);
            return item;
        }

        [HttpDelete("{id}")]
        public void DeleteStore(string id)
        {
            var delete = StoreData.FirstOrDefault(it => it.IdStore == id.ToString());
            StoreData.Remove(delete);
        }

    }
}